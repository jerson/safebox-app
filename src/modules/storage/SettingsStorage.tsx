import AppStorage from './AppStorage';
import SettingsModel from './models/SettingsModel';

export default class SettingsStorage {
  static async getFirst() {
    const settings = await AppStorage.findAll<SettingsModel>(
      SettingsModel.schema.name
    );
    if (settings[0]) {
      return settings[0];
    }
    const initial = SettingsModel.initWithDefaults();
    return await AppStorage.create<SettingsModel>(
      SettingsModel.schema.name,
      initial
    );
  }
}
