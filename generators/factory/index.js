const Generator = require('yeoman-generator');
const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const utils = require('../../utils');

class FactoryGenerator extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('name', {
      type: String,
      required: true
    });
  }

  writing() {
    this.pascalCaseName = utils.getPascalName(this.options.name);
    this.kebabCaseName = utils.getKebabName(this.options.name);
    this.camelCaseName = utils.getCamelName(this.options.name);
    this.moduleFolder = path.join(this.contextRoot, this.kebabCaseName);

    mkdirp.sync(this.moduleFolder);

    const templates = fs.readdirSync(this.sourceRoot());

      for (let file of templates) {
        const dest = path.join(this.moduleFolder, `${this.kebabCaseName}.${file}`);
        this._copyTemplate(file, dest);
      }
  }

  _copyTemplate(filePath, toPath) {
    return this.fs.copyTpl(
      this.templatePath(filePath),
      this.destinationPath(toPath), {
        kebabCaseName: this.kebabCaseName,
        pascalCaseName: this.pascalCaseName,
        camelCaseName: this.camelCaseName
      }
    );
  }
}

module.exports = FactoryGenerator;
