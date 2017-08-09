const Generator = require('yeoman-generator');
const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const utils = require('../../utils');

class RouteGenerator extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('name', {
      type: String,
      required: true
    });

    this.argument('path', {
      type: String,
      required: false,
      default: '/',
    });
  }

  writing() {
    this.pascalCaseName = utils.getPascalName(this.options.name);
    this.kebabCaseName = utils.getKebabName(this.options.name);
    this.camelCaseName = utils.getCamelName(this.options.name);
    this.moduleFolder = path.join(this.contextRoot, this.options.path, this.kebabCaseName);

    mkdirp.sync(this.moduleFolder);
    mkdirp.sync(path.join(this.moduleFolder, 'components'));

    this._copyTemplate('index.js', path.join(this.moduleFolder, 'index.js'));
    this._copyTemplate('README.md', path.join(this.moduleFolder, 'components', 'README.md'));

    console.log('Route Context', this.contextRoot);

    this.composeWith(require.resolve('../component'), {
      arguments: [
        `${this.kebabCaseName}-route`,
        path.join(this.options.path, this.kebabCaseName, 'containers'),
      ]
    });
  }

  _copyTemplate(filePath, toPath) {
    return this.fs.copyTpl(
      this.templatePath(filePath),
      this.destinationPath(toPath), {
        ngModule: this.config.get('ngModule'),
        kebabCaseName: this.kebabCaseName,
        pascalCaseName: this.pascalCaseName,
        camelCaseName: this.camelCaseName,
      }
    );
  }
}

module.exports = RouteGenerator;
