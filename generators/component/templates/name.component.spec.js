module.exports = ngModule => {
  const component = require('./{{> kabobCaseComponentName}}.component.js');
  component(ngModule);

  describe('component:{{> camelCaseComponentName}}', () => {
    let $componentController;

    {{#if route}}
    beforeEach(() => {
      window.module('ui.router');
      window.module(ngModule.name);
    });
    {{else}}
    beforeEach(window.module(ngModule.name));
    {{/if}}

    beforeEach(inject(_$componentController_ => {
      $componentController = _$componentController_;
    }));

    function createController(bindings = {}) {
      const $ctrl = $componentController('{{> camelCaseComponentName}}', { $scope: {} }, bindings);
      return $ctrl;
    }

    it('should instantiate', () => {
      const $ctrl = createController();
      expect($ctrl).to.not.equal(undefined);
    });

    // insert your tests here
  });
};
