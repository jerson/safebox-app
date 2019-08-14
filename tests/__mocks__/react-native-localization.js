const interfaceLanguage = 'en';

class RNLocalization {
  constructor(props) {
    this.props = props;
    this.setLanguage(interfaceLanguage);
  }

  setLanguage(interfaceLanguage) {
    const bestLanguage = interfaceLanguage;
    this.language = bestLanguage;
    //Associate the language object to the this object
    if (this.props[bestLanguage]) {
      //console.log("There are strings for the language:"+language);
      var localizedStrings = this.props[this.language];
      for (var key in localizedStrings) {
        //console.log("Checking property:"+key);
        if (localizedStrings.hasOwnProperty(key)) {
          //console.log("Associating property:"+key);
          this[key] = localizedStrings[key];
        }
      }
    }
  }
}

export default RNLocalization;
