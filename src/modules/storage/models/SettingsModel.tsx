export default class SettingsModel {
  public static schema: Realm.ObjectSchema = {
    name: 'Settings',
    properties: {
      biometricPublicKey: {type: 'string', optional: true, default: ''},
    },
  };

  public static initWithDefaults() {
    return new SettingsModel();
  }

  public biometricPublicKey!: string;
}
