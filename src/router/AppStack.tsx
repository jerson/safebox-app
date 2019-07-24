import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import BottomTabBar from "../components/navigation/BottomTabBar";
import Colors from "../modules/constants/Colors";
import AccountsScreen from "../scenes/app/AccountsScreen";

export default createBottomTabNavigator(
  {
    Accounts: AccountsScreen,
    Accounts2: AccountsScreen,
    Accounts3: AccountsScreen,
    Accounts4: AccountsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state;
      let tabBarLabel;

      switch (routeName) {
        case "Sample":
          tabBarLabel = "Sample";
          break;
        default:
          tabBarLabel = routeName;
          break;
      }
      return {
        tabBarLabel,
        tabBarIcon: () => {
          let imageSource = require("../assets/images/back-icon.png");
          const iconStyleTab = { width: 22, height: 22 };
          if (routeName === "Sample") {
            imageSource = require("../assets/images/back-icon.png");
          }
          return (
            <Image
              resizeMode={"contain"}
              source={imageSource}
              style={[iconStyleTab, { tintColor: Colors.grey6 }]}
            />
          );
        }
      };
    },
    tabBarComponent: props => {
      return <BottomTabBar {...props} />;
    }
  }
);
