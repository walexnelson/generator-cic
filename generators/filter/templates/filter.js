module.exports = (ngModule) => {
  function <%= camelCaseName %>() {
    return items => items;
  }

  ngModule.filter('<%= camelCaseName %>', <%= camelCaseName %>);
};
