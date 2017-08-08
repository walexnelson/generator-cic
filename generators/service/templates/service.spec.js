module.exports = ngModule => {
  const factory = require('./<%= kebabCaseName %>.service.js');
  factory(ngModule);

  describe('service:{{camelCase name}}', () => {
    let {{camelCase name}};

    beforeEach(window.module(ngModule.name));

    beforeEach(inject(_{{camelCase name}}_ => {
      {{camelCase name}} = _{{camelCase name}}_;
    }));

    it('should instantiate', () => {
      expect({{camelCase name}}).to.not.equal(undefined);
    });

    // insert your tests here
  });
};
