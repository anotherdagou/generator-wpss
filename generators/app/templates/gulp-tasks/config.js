var devURL = '<%= url %>';
var wpTemplate = './wp-content/themes/olympus/';

module.exports = {
    browserSync: {
        proxy: devURL,
        files: [wpTemplate + '**/*.php'],
        open: true
    }
};
