module.exports = (ngModule) => {
  const factory = require('./<%= kebabCaseName %>.factory.js');
  factory(ngModule);

  describe('factory:<%= camelCaseName %>', () => {
    let <%= camelCaseName %>;

    beforeEach(window.module(ngModule.name));

    beforeEach(inject((_<%= camelCaseName %>_) => {
      <%= camelCaseName %> = _<%= camelCaseName %>_;
    }));

    it('should instantiate', () => {
      expect(<%= camelCaseName %>).to.not.equal(undefined);
    });

    // insert your tests here
  });
};
