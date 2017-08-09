module.exports = (ngModule) => {
  function <%= camelCaseName %>() {
    const meaningOfLife = 42;

    const service = {
      getMeaningOfLife,
    };

    return service;

    function getMeaningOfLife() {
      return meaningOfLife;
    }
  }

  ngModule.factory('<%= camelCaseName %>', <%= camelCaseName %>);
};
