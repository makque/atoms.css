var gulp = require('gulp');
var sass = require('gulp-sass');

var paths = {
    'normalize': './node_modules/normalize-scss/sass',
    'src': {
        'sass': './src/sass',
        'js': './src/js'
    },
    'dist': {
        'css': './dist/css',
        'js': './dist/js'
    },
};

gulp.task('sass', function () {
    return gulp.src(paths.src.sass + '/**/*.scss')
        .pipe(sass({
            includePaths: [
                paths.normalize
            ]
        }).on('error', sass.logError))
        .pipe(gulp.dest(paths.dist.css));
});

gulp.task('default', [ 'sass' ]);
