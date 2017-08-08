equire('angular-mocks/ngMock');
const testFiles = require.context('../src', true, /\.spec\.js$/);
const ngModule = angular.module('<%= ngModule %>.test', []);
testFiles.keys().forEach(key => { testFiles(key)(ngModule); });
