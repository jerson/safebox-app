export default class RNIap {
  static getProducts() {
    return [];
  }
  static getAvailablePurchases() {
    return [];
  }
  static initConnection() {
    return true;
  }
  static requestPurchase(productId, safe) {
    return true;
  }
  static acknowledgePurchaseAndroid(token) {
    return true;
  }
  static finishTransactionIOS(token) {
    return true;
  }
  static purchaseUpdatedListener(callback) {
    return {
      remove: jest.fn()
    };
  }
  static purchaseErrorListener(callback) {
    return {
      remove: jest.fn()
    };
  }
}
