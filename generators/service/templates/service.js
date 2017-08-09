module.exports = (ngModule) => {
  class <%= pascalCaseName %> {
    constructor() {
      this.meaningOfLife = 42;
    }

    getMeaningOfLife() {
      return this.meaningOfLife;
    }
  }

  ngModule.service('<%= camelCaseName %>', <%= pascalCaseName %>);
};
