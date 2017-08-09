module.exports = (ngModule) => {
  const service = require('./<%= kebabCaseName %>.service.js');
  service(ngModule);

  describe('service:<%= camelCaseName %>', () => {
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
