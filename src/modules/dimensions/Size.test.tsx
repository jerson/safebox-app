import Size from './Size';

test('getStatusBarHeight', () => {
  expect(Size.getStatusBarHeight()).toBe(20);
});

test('getActionBarHeight', () => {
  expect(Size.getActionBarHeight()).toBe(64);
});

test('getHeight', () => {
  expect(Size.getHeight()).toBe(1334);
});

test('getWidth', () => {
  expect(Size.getWidth()).toBe(750);
});

test('getVisibleHeight', () => {
  expect(Size.getVisibleHeight()).toBe(1314);
});

test('getVisibleWidth', () => {
  expect(Size.getVisibleWidth()).toBe(750);
});

test('getHeaderBarHeight', () => {
  expect(Size.getHeaderBarHeight()).toBe(0);
});

test('getVisibleScreenHeight', () => {
  expect(Size.getVisibleScreenHeight()).toBe(1250);
});

test('getVisibleTabScreenHeight', () => {
  expect(Size.getVisibleTabScreenHeight()).toBe(1220);
});

test('getTabBarHeight', () => {
  expect(Size.getTabBarHeight()).toBe(30);
});

test('getBottomTabBarHeight', () => {
  expect(Size.getBottomTabBarHeight()).toBe(50);
});

test('isiPhoneX', () => {
  expect(Size.isiPhoneX()).toBe(false);
});

test('getBottomOffset', () => {
  expect(Size.getBottomOffset()).toBe(0);
});
