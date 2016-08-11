'use strict';
var chalk = require('chalk');

module.exports = {
    commonFiles
};

function commonFiles() {
    var msg = chalk.yellow('\n Copying files\n');
    var self = this;
    var files = [
        '.gitignore',
        'package.json',
        'gulpfile.js',
        'gulp-tasks'
    ];

    this.log(msg);
    copyFiles(self,files);
}

function copyFiles(self, files) {
    files.forEach(function(path){
        self.fs.copyTpl(
                self.templatePath(path),
                self.destinationPath(path),
                { url: self.wpUrl }
        );
    });
}
