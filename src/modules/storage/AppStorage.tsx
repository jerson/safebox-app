import Realm, {Results} from 'realm';
import DeviceInfo from 'react-native-device-info';
import SettingsModel from './models/SettingsModel';
import Log from '../log/Log';

const TAG = '[AppStorage]';
export type SchemaType = string;

export default class AppStorage {
  static open() {
    return Realm.open({
      schema: [SettingsModel],
      schemaVersion: 1,
      encryptionKey: AppStorage.createId(),
      path: 'app.realm',
    });
  }

  static async create<T>(
    schema: SchemaType,
    object: T,
    update: boolean = true,
  ): Promise<T> {
    const realm = await AppStorage.open();
    return new Promise((resolve, reject) => {
      try {
        realm.write(() => {
          const output = realm.create(schema, object, update);
          if (output) {
            resolve(output);
            return;
          }
          reject(new Error('error writing schema'));
        });
      } catch (e) {
        Log.exception(TAG, 'create', e);
        reject(e);
      }
    });
  }

  static async write<T>(callback: () => T): Promise<T> {
    const realm = await AppStorage.open();
    return new Promise((resolve, reject) => {
      try {
        realm.write(() => {
          resolve(callback());
        });
      } catch (e) {
        Log.exception(TAG, 'write', e);
        reject(e);
      }
    });
  }

  static async findOne<T>(
    schema: SchemaType,
    query: string,
    ...arg: any[]
  ): Promise<T & Realm.Object> {
    const realm = await AppStorage.open();
    return new Promise((resolve, reject) => {
      const results = realm.objects<T>(schema).filtered(query, ...arg);
      if (results.length > 0) {
        resolve(results[0]);
        return;
      }
      reject(new Error('result not found'));
    });
  }

  static async find<T>(
    schema: SchemaType,
    query: string,
    ...arg: any[]
  ): Promise<Results<T & Realm.Object>> {
    const realm = await AppStorage.open();
    return new Promise(resolve => {
      const results = realm.objects<T>(schema).filtered(query, ...arg);
      resolve(results);
    });
  }

  static async findAll<T>(
    schema: SchemaType,
  ): Promise<Results<T & Realm.Object>> {
    const realm = await AppStorage.open();
    return new Promise(resolve => {
      const results = realm.objects<T>(schema);
      resolve(results);
    });
  }

  static async delete(
    schema: SchemaType,
    query: string,
    ...arg: any[]
  ): Promise<boolean> {
    const realm = await AppStorage.open();
    return new Promise((resolve, reject) => {
      const results = realm.objects(schema).filtered(query, ...arg);
      try {
        realm.write(() => {
          if (results) {
            realm.delete(results);
            resolve(true);
            return;
          }

          resolve(false);
        });
      } catch (e) {
        Log.exception(TAG, 'delete', e);
        reject(e);
      }
    });
  }
  private static createId() {
    const stringId = DeviceInfo.getUniqueIdSync();
    const ids = [];
    let count = 0;

    for (const id of stringId.split('')) {
      count++;
      if (count <= 64) {
        ids.push(('' + id).charCodeAt(0));
      } else {
        break;
      }
    }

    for (let left = count; left < 64; left++) {
      ids.push('0'.charCodeAt(0));
    }
    return new Int8Array(ids);
  }
}
