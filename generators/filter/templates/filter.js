module.exports = (ngModule) => {
  function <%= camelCaseName %>() {
    return (items) => {
      // do something
      return items;
    };
  }

  ngModule.filter('<%= camelCaseName %>', <%= camelCaseName %>);
};
