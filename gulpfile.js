let gulp = require('gulp');
let plumber = require('gulp-plumber');
let minifyCSS = require('gulp-minify-css');
let sourcemap = require('gulp-sourcemaps');
let sass = require('gulp-sass');
let postcss = require('gulp-postcss');
let autoprefixer = require('autoprefixer');
let browser_sync = require('browser-sync');

gulp.task('sass', function(){
    return gulp.src('srcs/scss/style.scss')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
        autoprefixer()
    ]))
    .pipe(minifyCSS())
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest('srcs/css'))
    .pipe(browser_sync.stream());
});

gulp.task('sass', function(){
    return gulp.src('srcs/scss/materialize.scss')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
        autoprefixer()
    ]))
    .pipe(minifyCSS())
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest('srcs/css'))
    .pipe(browser_sync.stream());
});

gulp.task('start', function() {
    browser_sync.init({
        server: {
            baseDir: 'srcs'
        }
    });
    gulp.watch('srcs/**/*.scss', gulp.series('sass'));
    gulp.watch('srcs/**/*.js').on('change', browser_sync.reload);
    gulp.watch('srcs/*.html').on('change', browser_sync.reload);
});

// npm link gulp && npm link gulp-plumber && npm link gulp-minify-css && npm link gulp-sourcemaps && npm link gulp-sass && npm link gulp-postcss && npm link autoprefixer && npm link browser-sync