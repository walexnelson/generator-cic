require('./app.scss');
const angular = require('angular');
const { attachAll, getNgModuleNames } = require('../utils/boilerplate');

const ngDependencies = [
  'ui.router',
  'ngAnimate',
  // Add additional external Angular dependencies here

  require('./common').name,
  ...getNgModuleNames(require.context('./routes', true, /index\.js$/)),
];

const ngModule = angular.module('app', ngDependencies)
  .constant('$', require('jquery'))
  .constant('_', require('lodash'));

attachAll(require.context('./components', true, /\.(component|directive)\.js$/))(ngModule);
attachAll(require.context('./containers', true, /\.(component|directive)\.js$/))(ngModule);

ngModule.config(require('./app.config.js'))
  .run(require('./app.init.js'));
