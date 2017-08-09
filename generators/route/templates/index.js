const { attachAll } = require('../../../utils/boilerplate');

const ngModule = angular.module('<%= ngModule %>.<%= camelCaseName %>', []);

attachAll(require.context('./components', true, /\.(component|directive)\.js$/))(ngModule);
attachAll(require.context('./containers', true, /\.(component|directive)\.js$/))(ngModule);

ngModule.config(<%= camelCaseName %>Config);

function <%= camelCaseName %>Config($stateProvider) {
  $stateProvider.state('<%= camelCaseName %>', {
    url: '/<%= kebabCaseName %>',
    template: '<<%= kebabCaseName %>-route></<%= kebabCaseName %>-route>',
  });
}

export default ngModule;
