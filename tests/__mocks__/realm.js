export default class Realm {
  schema = [];
  data = {};
  constructor(params) {
    for (const object of params.schema) {
      const schema = object.schema ? object.schema : object;
      this.data[schema.name] = [];
      this.data[schema.name].filtered = () => {
        return this.data[schema.name];
      };
    }

    this.schema = params.schema.map(schema => {
      return schema.schema || schema;
    });
  }
  static open(params) {
    return new Realm(params);
  }
  objects(schemaName) {
    return this.data[schemaName];
  }
  write(fn) {
    fn();
  }
  create(schemaName, data) {
    this.data[schemaName].push(data);
    return data;
  }
  delete(obj) {}
}
