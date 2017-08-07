module.exports = ngModule => {
  function {{camelCase name}}() {
    return (items) => {
      // do something
      return items;
    };
  }

  // inject dependencies here
  {{camelCase name}}.$inject = [];

  ngModule.filter('{{camelCase name}}', {{camelCase name}});
};
