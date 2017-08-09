module.exports = (ngModule) => {
  <%if (!isSimple) { %>require('./<%= kebabCaseName %>.component.scss');

  <% } %>ngModule.component('<%= camelCaseName %>', {
    template: <%- isSimple ? `'<div></div>'` : `require('./${kebabCaseName}.component.html')` %>,
    controller: <%= camelCaseName %>Ctrl,
    bindings: {
      // Inputs should use < and @ bindings.
      // Outputs should use & bindings.
    },
  });

  function <%= camelCaseName %>Ctrl() {
    const ctrl = this;

    ctrl.$onInit = $onInit;

    function $onInit() {
      // Called on each controller after all the controllers have been constructed and had their bindings initialized
      // Use this for initialization code.
    }
  }
};
