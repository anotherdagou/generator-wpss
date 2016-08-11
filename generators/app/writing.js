'use strict';
var chalk = require('chalk');

module.exports = {
    commonFiles
};

function commonFiles() {
    var msg = chalk.yellow('\n Copying files\n');
    var self = this;
    var files = [
        ['_gitignore','.gitignore'],
        'package.json',
        'gulpfile.js',
        'gulp-tasks'
    ];

    this.log(msg);
    copyFiles(self,files);
}

function copyFiles(self, files) {
    files.forEach(function(path){
        if(typeof path === "object") {
            self.fs.copyTpl(
                self.templatePath(path[0]),
                self.destinationPath(path[1]),
                { url: self.wpUrl }
            );
        } else {
            self.fs.copyTpl(
                self.templatePath(path),
                self.destinationPath(path),
                { url: self.wpUrl }
            );
        }



    });
}
