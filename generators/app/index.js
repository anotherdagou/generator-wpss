var generators = require('yeoman-generator');
var chalk = require('chalk');
var prompting = require('./prompting');
var installing = require('./installing');
var writing = require('./writing');

module.exports = generators.Base.extend({

    // Get User Information
    prompting: {
        askForWordpressVersion: prompting.askForWordpressVersion,
        askForDBConnection: prompting.askForDBConnection,
        askForWPInstallation: prompting.askForWPInstallation
    },

    // Copy common files for the new project (.gitignore, package.json, html, etc)
    writing: {
        commonFiles: writing.commonFiles
    },

    // Install Dependencies and run command lines
    install: {
        downloadWP: installing.downloadWP,
        setWPConfig: installing.setWPConfig,
        installWP: installing.installWP,
        installPlugins: installing.installPlugins,
        installModules: installing.installModules
    }
});
