const Generator = require('yeoman-generator');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const prompts = require('./prompts');
const utils = require('../../utils');
const packageInfo = require('../../package.json');

class AppGenerator extends Generator {
  constructor(args, opts) {
    super(args, opts);

    // Make options available
    this.option('skip-welcome-message', {
      desc: 'Skip the welcome message',
      type: Boolean,
      defaults: false
    });

    this.option('skip-install');
    this.config.save();
  }

  prompting() {
    return this.prompt(prompts).then(answers => {
      if (answers.appName !== utils.getAppName()) {
        answers.appName = utils.getAppName(answers.appName);
      }

      // Set needed global vars for yo
      this.appName = answers.appName;
      this.ngModule = answers.ngModule;
      this.description = answers.description;
      this.repoUrl = answers.repoUrl;
      this.author = answers.author;
      this.generatedWithVersion = parseInt(packageInfo.version.split('.').shift(), 10);

      // Set needed keys into config
      this.config.set('appName', this.appName);
      this.config.set('generatedWithVersion', this.generatedWithVersion);
    })
  }

  writing() {
    const templates = fs.readdirSync(this.sourceRoot());

    for (let file of templates) {
      if (['gitignore'].indexOf(file) === -1) this._copyTemplate(file, file);
    }

    // copy .gitignore
    this._copyFile('gitignore', '.gitignore');

    // make empty directories
    mkdirp.sync(path.join(this.destinationRoot(), 'src/components'));
    mkdirp.sync(path.join(this.destinationRoot(), 'src/containers'));
    mkdirp.sync(path.join(this.destinationRoot(), 'src/routes'));
  }

  install() {
    if (!this.options['skip-install']) {
      this.installDependencies({ bower: false });
    }
  }

  _copyTemplate(filePath, toPath) {
    return this.fs.copyTpl(
      this.templatePath(filePath),
      this.destinationPath(toPath), {
        appName: this.appName,
        ngModule: utils.getCamelName(this.ngModule),
        description: this.description,
        repoUrl: this.repoUrl,
        author: this.author,
        webpack: key => {
          const options = {
            cdn: `
              <% for (var dependency in htmlWebpackPlugin.options.pkg.cdnDependencies) { %>
              <script src="<%= htmlWebpackPlugin.options.pkg.cdnDependencies[dependency] %>"></script>
              <% } %>
            `,
            banner: `
                <!-- <%= htmlWebpackPlugin.options.pkg.name + ' v' + htmlWebpackPlugin.options.pkg.version + ' built on ' + new Date() %> -->
            `
          };

          return options[key];
        }
      }
    );
  }

  _copyFile(filePath, toPath) {
    const destPath = toPath || filePath;
    return this.fs.copy(
      this.templatePath(filePath),
      this.destinationPath(destPath)
    );
  }
}

module.exports = AppGenerator;
