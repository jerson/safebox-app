import React from 'react';
import {
  Animated,
  StyleSheet,
  Keyboard,
  Platform,
  LayoutChangeEvent,
  ViewStyle,
  TextStyle,
  EmitterSubscription,
  View
} from 'react-native';
import {
  SafeAreaView,
  NavigationRoute,
  NavigationScreenProp
} from 'react-navigation';
import BottomTabBarIcon from './BottomTabBarIcon';
import Colors from '../../modules/constants/Colors';
import Font from '../../modules/resources/Font';

const isIos = Platform.OS === 'ios';
const Sizes = {
  Height: 55
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    position: 'relative',
    height: Sizes.Height,
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: Colors.grey2,
    shadowOffset: { height: 0, width: 0 },
    elevation: 16,
    overflow: 'visible'
  } as ViewStyle,
  container: {
    left: 0,
    right: 0,
    bottom: 0
  } as ViewStyle,
  tab: {
    flex: 1,
    alignItems: isIos ? 'center' : 'stretch',
    paddingTop: 8,
    paddingBottom: 4,
    paddingHorizontal: 1,
    justifyContent: 'flex-end',
    flexDirection: 'column'
  } as ViewStyle,
  icon: {
    alignItems: 'center'
  } as ViewStyle,
  label: {
    ...Font(),
    textAlign: 'center',
    fontSize: 11,
    marginTop: 4,
    letterSpacing: -0.4,
    lineHeight: 15,
    color: Colors.grey6
  } as TextStyle,
  labelFocused: {
    ...Font({ weight: 'Bold' })
  } as TextStyle
});
export interface BottomTabBarProps {
  navigation: NavigationScreenProp<NavigationRoute>;
  onTabPress: (params: Route) => void;
  onTabLongPress: (params: Route) => void;
  getAccessibilityLabel: (props: { route: NavigationRoute }) => string;
  getLabelText: (params: Route) => string;
  renderIcon: (params: Route) => React.ReactNode;
}

export interface BottomTabBarState {
  layout: { height: number; width: number };
  keyboard: boolean;
  visible: Animated.Value;
}

export interface RouteFocused {
  route: NavigationRoute;
  focused: boolean;
}

export interface Route {
  route: NavigationRoute;
}

export default class BottomTabBar extends React.Component<
  BottomTabBarProps,
  BottomTabBarState
> {
  static defaultProps = {};

  state: BottomTabBarState = {
    layout: { height: 0, width: 0 },
    keyboard: false,
    visible: new Animated.Value(1)
  };

  keyboardWillShowListener!: EmitterSubscription;
  keyboardWillHideListener!: EmitterSubscription;

  componentDidMount() {
    this.keyboardWillShowListener = Keyboard.addListener(
      Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow',
      this.keyboardWillShow
    );
    this.keyboardWillHideListener = Keyboard.addListener(
      Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide',
      this.keyboardWillHide
    );
  }

  componentWillUnmount() {
    this.keyboardWillShowListener.remove();
    this.keyboardWillHideListener.remove();
  }

  keyboardWillShow = () => {
    this.setState({ keyboard: true }, () =>
      Animated.timing(this.state.visible, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true
      }).start()
    );
  };

  keyboardWillHide = () => {
    Animated.timing(this.state.visible, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true
    }).start(() => {
      this.setState({ keyboard: false });
    });
  };

  handleLayout = (e: LayoutChangeEvent) => {
    const { layout } = this.state;
    const { height, width } = e.nativeEvent.layout;
    if (height === layout.height && width === layout.width) {
      return;
    }

    this.setState({
      layout: {
        height,
        width
      }
    });
  };

  renderLabel = ({ route, focused }: RouteFocused) => {
    const { getLabelText } = this.props;
    const label = getLabelText({ route });

    return (
      <Animated.Text
        numberOfLines={1}
        style={[styles.label, focused && styles.labelFocused]}
        allowFontScaling={false}
      >
        {label}
      </Animated.Text>
    );
  };

  renderIcon = (params: RouteFocused) => {
    const { renderIcon } = this.props;

    return <View style={styles.icon}>{renderIcon(params)}</View>;
  };

  render() {
    const {
      navigation,
      onTabPress,
      onTabLongPress,
      getAccessibilityLabel
    } = this.props;
    const { routes } = navigation.state;
    const { visible, keyboard, layout } = this.state;
    const currentIndex = navigation.state.index;

    const transform = {
      transform: [
        {
          translateY: visible.interpolate({
            inputRange: [0, 1],
            outputRange: [layout.height, 0]
          })
        }
      ],
      position: keyboard ? 'absolute' : null
    };

    return (
      <Animated.View
        style={[styles.container, transform]}
        pointerEvents={keyboard ? 'none' : 'auto'}
        onLayout={this.handleLayout}
      >
        <SafeAreaView style={styles.tabBar}>
          {routes.map((route, index) => {
            const focused = index === currentIndex;
            const scene: RouteFocused = { route, focused };
            const accessibilityLabel = getAccessibilityLabel({
              route
            });

            return (
              <BottomTabBarIcon
                key={route.key}
                onPress={() => onTabPress({ route })}
                onLongPress={() => onTabLongPress({ route })}
                accessibilityLabel={accessibilityLabel}
                focused={focused}
                style={styles.tab}
              >
                {this.renderIcon(scene)}
                {this.renderLabel(scene)}
              </BottomTabBarIcon>
            );
          })}
        </SafeAreaView>
      </Animated.View>
    );
  }
}
