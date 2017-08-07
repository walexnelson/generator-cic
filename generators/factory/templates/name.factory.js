module.exports = ngModule => {
  function {{camelCase name}}() {
    // Private variables
    const meaningOfLife = 42;

    // Public API here
    const service = {
      getMeaningOfLife,
    };

    return service;

    //// Functions ////
    function getMeaningOfLife() {
      return meaningOfLife;
    }
  }

  // inject dependencies here
  {{camelCase name}}.$inject = [];

  ngModule.factory('{{camelCase name}}', {{camelCase name}});
};
