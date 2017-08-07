require('./app.scss');

import angular from 'angular';
import { attachAll, getNgModuleNames } from '../utils/boilerplate.js';

const ngDependencies = [
  'ui.router',
  'ngAnimate',
  require('../common').name,
  // Add additional external Angular dependencies here
];

ngDependencies.push.apply(ngDependencies, getNgModuleNames(require.context('./routes', true, /index\.js$/)));

const ngModule = angular.module('app', ngDependencies)
  .constant('$', require('jquery'))
  .constant('_', require('lodash'));

attachAll(require.context('./components', true, /\.(component|directive)\.js$/))(ngModule);
attachAll(require.context('./containers', true, /\.(component|directive)\.js$/))(ngModule);

ngModule.config(require('./app.config.js'))
  .run(require('./app.init.js'));