module.exports = (ngModule) => {
  <%if (!isSimple) { %>require('./<%= kebabCaseName %>.directive.scss');
  <% } %>
  /*
      Component vs Directive

      99% of the time you can use a component (directive with syntactic sugar)
      but there are cases where you'll need a little more control over the
      DOM then what a component provides. Here's a short list according to
      Angular docs. https://docs.angularjs.org/guide/component

      - for directives that need to perform actions in compile and pre-link functions,
        because they aren't available
      - when you need advanced directive definition options like priority, terminal,
        multi-element
      - when you want a directive that is triggered by an attribute or CSS class, rather
        than an element
  */

  ngModule.directive('<%= camelCaseName %>', () => {
    return {
      restrict: 'A',
      transclude: false,
      template: <%- isSimple ? `'<div></div>'` : `require('./${kebabCaseName}.directive.html')` %>,
      scope: {},
      link: <%= camelCaseName %>Link,
    };

    function <%= camelCaseName %>Link() {}
  });
};
