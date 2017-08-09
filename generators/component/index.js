const Generator = require('yeoman-generator');
const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const utils = require('../../utils');

class ComponentGenerator extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('name', {
      type: String,
      required: true
    });

    this.option('simple', {
      desc: `Don't include stylesheet and template`,
      type: Boolean,
      defaults: false
    });
  }

  writing() {
    this.isSimple = this.options.simple;
    this.pascalCaseName = utils.getPascalName(this.options.name);
    this.kebabCaseName = utils.getKebabName(this.options.name);
    this.camelCaseName = utils.getCamelName(this.options.name);
    this.moduleFolder = path.join(this.contextRoot, this.kebabCaseName);

    mkdirp.sync(this.moduleFolder);

    const templates = fs
      .readdirSync(this.sourceRoot())
      .filter(file => this.isSimple ? file.indexOf('.js') > -1 : true);

      for (let file of templates) {
        const dest = path.join(this.moduleFolder, `${this.kebabCaseName}.${file}`);
        this._copyTemplate(file, dest);
      }
  }

  _copyTemplate(filePath, toPath) {
    return this.fs.copyTpl(
      this.templatePath(filePath),
      this.destinationPath(toPath), {
        isSimple: this.isSimple,
        kebabCaseName: this.kebabCaseName,
        pascalCaseName: this.pascalCaseName,
        camelCaseName: this.camelCaseName,
        moduleFolder: this.moduleFolder
      }
    );
  }
}

module.exports = ComponentGenerator;
