var devURL = '<%= url %>';

module.exports = {
    browserSync: {
        proxy: devURL,
        files: ['./wp-content/themes/**/*.php'],
        open: true
    }
};
