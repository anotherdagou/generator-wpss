var devURL = '<%= url %>';
var themesRoot = './wp-content/themes/';
var wpTemplate= themesRoot+'your_template/';

module.exports = {
    browserSync: {
        proxy: devURL,
        files: [wpTemplate + '**/*.php'],
        open: true
    }
};
