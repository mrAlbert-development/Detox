const AndroidDeviceCookie = require('./AndroidDeviceCookie');

class GenycloudEmulatorCookie extends AndroidDeviceCookie {
  /**
   * @param instance { GenyInstance }
   */
  constructor(instance) {
    super();
    this.instance = instance;
  }

  get adbName() {
    return this.instance.adbName;
  }
}

module.exports = GenycloudEmulatorCookie;