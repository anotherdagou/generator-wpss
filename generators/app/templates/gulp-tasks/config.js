var devURL = '<%= url %>';
var wpTemplate = './wp-content/themes/your_theme/';

module.exports = {
    browserSync: {
        proxy: devURL,
        files: [wpTemplate + '**/*.php'],
        open: true
    },
    sass: {
    	src: wpTemplate + 'your_sass_source/**/*.scss',
    	dest: wpTemplate + 'your_css_dest/',
    },
    javascript:{
    	src: wpTemplate + 'your_js_source/your_js_file.js',
    	dest: wpTemplate + 'your_js_dest/'
    }
};
