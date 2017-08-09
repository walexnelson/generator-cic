module.exports = (ngModule) => {
  const filter = require('./<%= kebabCaseName %>.filter.js');
  filter(ngModule);

  describe('filter:<%= camelCaseName %>', () => {
    let $filter;

    beforeEach(window.module(ngModule.name));

    beforeEach(inject((_$filter_) => {
      $filter = _$filter_;
    }));

    it('should test properly', () => {
      const <%= camelCaseName %> = $filter('<%= camelCaseName %>');
      expect(<%= camelCaseName %>).to.not.equal(undefined);
    });

    // insert your tests here
  });
};
