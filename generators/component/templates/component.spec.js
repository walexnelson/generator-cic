module.exports = (ngModule) => {
  const component = require('./<%= kebabCaseName %>.component.js');
  component(ngModule);

  describe('component:<%= camelCaseName %>', () => {
    let $componentController;

    beforeEach(window.module(ngModule.name));

    beforeEach(inject((_$componentController_) => {
      $componentController = _$componentController_;
    }));

    function createController(bindings = {}) {
      const $ctrl = $componentController('<%= camelCaseName %>', { $scope: {} }, bindings);
      return $ctrl;
    }

    it('should instantiate', () => {
      const $ctrl = createController();
      expect($ctrl).to.not.equal(undefined);
    });

    // insert your tests here
  });
};
