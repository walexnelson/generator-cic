'use strict';

const path = require('path');
const _ = require('underscore.string');

// Needed directory paths
const baseName = path.basename(process.cwd());

/**
 * Get the base directory
 * @return {String}
 */
const getBaseDir = () => {
  return baseName;
};

/**
 * Get a js friendly application name
 * @param  {String} appName The input application name [optional]
 * @return {String}
 */
const getAppName = (appName) => {

  // If appName is not given, use the current directory
  if(appName === undefined) {
    appName = getBaseDir();
  }

  return _.slugify(_.humanize(appName));
};

const getDestinationPath = (name, type, suffix) => {
  const prefix = path.join('src', type, name);
  const portablePrefix = path.sep === '/' ? prefix : prefix.split(path.sep).join('/');
  return [portablePrefix, suffix].join('.');
};

const getBaseName = (inputPath) => {
  const items = inputPath.split('/');
  return items[items.length - 1];
};

const getPascalName = (name) => {
  return _.classify(name);
}

const getKebabName = (name) => {
  return _.trim(_.dasherize(name), ['-']);
}

const getCamelName = (name) => {
  return _.camelize(name);
}

module.exports = {
  getBaseDir,
  getAppName,
  getDestinationPath,
  getBaseName,
  getPascalName,
  getKebabName,
  getCamelName
};
