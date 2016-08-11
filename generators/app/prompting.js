'use strict';
var chalk = require('chalk');

module.exports = {
    askForWordpressVersion,
    askForDBConnection,
    askForWPInstallation
};

function askForWordpressVersion() {
    var done = this.async();

    var welcome = chalk.yellow('\n\n   ##  ## ######  ####  ##  ##  ####  ###### ######\n   ## ##    ##   ##  ## ## ##  ##  ## ##     ##\n   ####     ##   ##     ####   ##  ## ####   ####\n   ## ##    ##   ##  ## ## ##  ##  ## ##     ##\n   ##  ## ######  ####  ##  ##  ####  ##     ##') + chalk.cyan('\n\nThis generator create an environment to develop a website with Wordpress and Gulp Tasks. \n');

    this.log(welcome);

    this.prompt([
        {
            type: 'input',
            name: 'wpVersion',
            message: 'What version of wordpress you want to install?',
            default: 'core',

        }
    ]).then(function(answer){
        this.wpVersion = answer.wpVersion;
        done();
    }.bind(this));
}

function askForDBConnection() {
    var done = this.async();
    var title = chalk.cyan('\nFill the info for your Database connection \n');

    this.log(title);

    this.prompt([
        {
            type: 'input',
            name: 'dbName',
            message: 'Database Name'
        },
        {
            type: 'input',
            name: 'dbUser',
            message: 'Database User'
        },
        {
            type: 'password',
            name: 'dbPass',
            message: 'Database Password'
        },
        {
            type: 'input',
            name: 'dbHost',
            message: 'host',
            default: 'localhost'
        }
    ]).then(function(answers) {
        this.dbName = answers.dbName;
        this.dbUser = answers.dbUser;
        this.dbPass = answers.dbPass;
        this.dbHost = answers.dbHost;
        done();
    }.bind(this));
}

function askForWPInstallation() {
    var done = this.async();
    var title = chalk.cyan('\nConfigure your Wordpress website \n');

    this.log(title);

    this.prompt([
        {
            type: 'input',
            name: 'wpUrl',
            message: 'URL'
        },
        {
            type: 'input',
            name: 'wpTitle',
            message: 'Tittle of the page'
        },
        {
            type: 'input',
            name: 'wpAdminUser',
            message: 'Admin Name'
        },
        {
            type: 'password',
            name: 'wpAdminPass',
            message: 'Admin Pass'
        },
        {
            type: 'input',
            name: 'wpAdminMail',
            message: 'Admin Email'
        },{
            type: 'confirm',
            name: 'wpSyncDB',
            message: 'Install WP Sync DB (A WordPress plugin that lets you push, pull, and sync database tables between WordPress installations.)?'
        }
    ]).then(function(answers) {
            this.wpUrl = answers.wpUrl;
            this.wpTitle = answers.wpTitle;
            this.wpAdminUser = answers.wpAdminUser;
            this.wpAdminPass = answers.wpAdminPass;
            this.wpAdminMail = answers.wpAdminMail;
            this.wpSyncDB = answers.wpSyncDB;
            done();
    }.bind(this));
}
