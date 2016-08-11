'use strict';

var chalk = require('chalk');

module.exports = {
    downloadWP,
    setWPConfig,
    installWP,
    installPlugins,
    installModules
}

function downloadWP() {
    var done = this.async();
    var msg = chalk.yellow('\nDownloading and installing your Wordpress Website \n');

    this.log(msg);

    // Install Wordpress
    if (this.wpVersion === 'core') {
        this.spawnCommand('wp',[this.wpVersion, 'download']).on('close', function(){ done(); });

    } else {
        this.spawnCommand('wp',['core', 'download', '--version='+this.wpVersion]).on('close', function(){ done(); });
    }

}

function setWPConfig() {
    var done = this.async();
    // Create wp-config file
    this.spawnCommand('wp',[
        'core',
        'config',
        '--dbname='+this.dbName,
        '--dbuser='+this.dbUser,
        '--dbpass='+this.dbPass,
        '--dbhost='+this.dbHost,
        '--skip-check']).on('close', function(){ done(); });
}

function installWP() {
    var done = this.async();
    // Install Wordpress
    this.spawnCommand('wp', [
        'core',
        'install',
        '--url='+this.wpUrl,
        '--title='+this.wpTitle,
        '--admin_user='+this.wpAdminUser,
        '--admin_password='+this.wpAdminPass,
        '--admin_email='+this.wpAdminMail]).on('close', function(){ done(); });
}

function installPlugins() {
    var done = this.async();

    // Install Plugins
    if (this.wpSyncDB === true) {
        var msg = chalk.yellow('\nInstalling Plugins\n');
        this.log(msg);

        this.spawnCommand('wp', [
            'plugin',
            'install',
            'https://github.com/wp-sync-db/wp-sync-db/archive/1.5.zip',
            '--activate']).on('close', function(){ done(); });
    }
}

function installModules() {
    var done = this.async();
    var msg = chalk.yellow('\nInstalling Dependencies\n');
    this.log(msg);

    //Install node modules
    this.spawnCommand('npm', ['install']).on('close', function(){ done(); });
}
