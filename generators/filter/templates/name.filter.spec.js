module.exports = ngModule => {
  const filter = require('./{{kabobCase name}}.filter.js');
  filter(ngModule);

  describe('Filter:{{camelCase name}}', () => {
    let $filter;

    beforeEach(window.module(ngModule.name));

    beforeEach(inject(_$filter_ => {
      $filter = _$filter_;
    }));

    it('should test properly', () => {
      const {{camelCase name}} = $filter('{{camelCase name}}');
      expect({{camelCase name}}).to.not.equal(undefined);
    });

    // insert your tests here
  });
};
