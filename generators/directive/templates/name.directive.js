module.exports = ngModule => {
  {{#if complex}}
  require('./{{> kabobCaseComponentName}}.component.css');

  {{/if}}
  ngModule.component('{{> camelCaseComponentName}}', {
    {{#if complex}}
    template: require('./{{> kabobCaseComponentName}}.component.html'),
    {{else}}
    template: '<div></div>',
    {{/if}}
    controller: {{> camelCaseComponentName}}Ctrl,
    bindings: {
      // Inputs should use < and @ bindings.
      // Outputs should use & bindings.
    }
  });

  function {{> camelCaseComponentName}}Ctrl() {
    const ctrl = this;

    ctrl.$onInit = $onInit;

    function $onInit() {
      // Called on each controller after all the controllers have been constructed and had their bindings initialized
      // Use this for initialization code.
    }
  }

  // inject dependencies here
  {{> camelCaseComponentName}}Ctrl.$inject = [];
};
