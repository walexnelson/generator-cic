require('./styles/typebase.scss');
const angular = require('angular');
const { attachAll } = require('../../utils/boilerplate');

const ngModule = angular.module('<%= ngModule %>.common', []);

attachAll(require.context('./services', true, /\.factory\.js$/))(ngModule);
attachAll(require.context('./filters', true, /\.filter\.js$/))(ngModule);

export default ngModule;
