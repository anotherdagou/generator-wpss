var gulp = require('gulp');
var	sass = require('gulp-sass');
var	cache = require('gulp-cached');
var	cleanCSS = require('gulp-clean-css');
var	rename = require('gulp-rename');
var	notify = require('gulp-notify');
var browserSync = require('browser-sync');
var progeny = require('gulp-progeny');
var config = require('./config').sass;


/*
	Por defecto cuando editamos un archivo scss dentro del directorio de estilos,
	todos los archivos scss son re-compilados, para evitar esto usamos el plugin
	gulp-cached. Este plugin solo re-compila el archivo modificado.

	Sin embargo, cuando tenemos un archivo scss que contiene otros archivos (@imports),
	y editamos algún archivo externo, este no re-compila el archivo scss padre. Para solventar
	este problema usamos el plugin  gulp-progeny.
*/

var progenyConfig = {
    // The file extension for the source code you want parsed
    // Will be derived from the source file path if not specified
    extension: 'scss',

    // Array of multiple file extensions to try when looking for dependencies
    extensionsList: ['scss', 'sass'],

    // Regexp to run on each line of source code to match dependency references
    // Make sure you wrap the file name part in (parentheses)
    regexp: /^\s*@import\s+['"]?([^'"]+)['"]?/,

    // File prefix to try (in addition to the raw value matched in the regexp)
    prefix: '_',

    // Matched stuff to exclude: string, regex, or array of either/both
    exclusion: /^compass/,
};


gulp.task('sass', function() {
	gulp.src(config.src)
		.pipe(cache('sassCache'))
		.pipe(progeny(progenyConfig))
		.pipe(sass({errLogToConsole: true}))
	    .on("error", notify.onError(function(error) {
	    	return error.message;
	    }))
	    .pipe(cleanCSS())
	    .pipe(rename({suffix: '.min'}))
	    .pipe(gulp.dest(config.dest))
	    .pipe(browserSync.reload({stream:true}));
});
