# Files generared for WPSS

This is a project generated with generator-wpss, under the hood WPSS has installed these files:

- **.gitignore**: defines which files and folders must be ignored for git
- **package.json**: npm dependencies
- **gulpfile.js**: main gulpfile
	- **config.js**: defines paths and settings for gulp tasks
	- **browserSync.js**: initializes browserSync. This library allow us reload the browser after new change in a template. 
	- **watch.js**: task that see any new change in the files of your template
	- **default.js**: main task that gulp run.

Feel free to uptede these files with your needs. Happy Codding. 

## Deploy with Git-ftp
If you don't have access to the server thorught SSH use this configuration for upload your changes trought [FTP with Git-ftp plugin](https://github.com/git-ftp/git-ftp)

- First [install git-ftp](https://github.com/git-ftp/git-ftp/blob/develop/INSTALL.md)
- Setup Git-ftp

```sh
git config git-ftp.url ftp.example.net #sftp://sftp.example.net:2222/ (url with secure connection and custom port)
git config git-ftp.user ftp-user
git config git-ftp.password ftp-password
git config git-ftp.remote-root wp-content/themes/your-theme  #Specifies the remote root directory to deploy to. The remote path in the URL is ignored.
git config git-ftp.syncroot wp-content/themes/your-theme #Specifies a local directory to sync from as if it were the git project root path.
```
