module.exports = (ngModule) => {
  const $directive = require('./<%= kebabCaseName %>.directive.js');
  $directive(ngModule);

  describe('directive:<%= camelCaseName %>', () => {
    let compile;
    let scope;
    let directive;

    beforeEach(() => {
      window.module(ngModule.name);

      inject(($compile, $rootScope) => {
        compile = $compile;
        scope = $rootScope.$new();
      });

      directive = getCompiledElement();
    });

    function getCompiledElement() {
      const element = angular.element('<div <%= kebabCaseName %>></div>');
      const compiledElement = compile(element)(scope);
      scope.$digest();
      return compiledElement;
    }

    it('should instantiate', () => {
      expect(directive).to.not.equal(undefined);
    });

    // insert your tests here
  });
};
