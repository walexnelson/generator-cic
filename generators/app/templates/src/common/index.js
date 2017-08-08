require('./styles/typebase.scss');

import angular from 'angular';
import { attachAll } from '../../utils/boilerplate.js';
const ngModule = angular.module('<%= ngModule %>.common', []);

attachAll(require.context('./services', true, /\.factory\.js$/))(ngModule);
attachAll(require.context('./filters', true, /\.filter\.js$/))(ngModule);

export default ngModule;
