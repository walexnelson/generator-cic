import { attachAll } from '../../../../other/boilerplate-utils.js';

const ngModule = angular.module('da.{{platform}}.{{camelCase name}}', []);

attachAll(require.context('./components', true, /\.(component|directive)\.js$/))(ngModule);
attachAll(require.context('./containers', true, /\.(component|directive)\.js$/))(ngModule);

ngModule.config({{camelCase name}}Config);


function {{camelCase name}}Config($stateProvider) {
  $stateProvider.state('{{camelCase name}}', {
    url: '/{{kabobCase name}}',
    template: '<{{kabobCase name}}-route></{{kabobCase name}}-route>'
  });
}

{{camelCase name}}Config.$inject = ['$stateProvider'];


export default ngModule;
