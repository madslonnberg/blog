var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var $ = require('gulp-load-plugins')();


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init(null, {
        proxy: "http://localhost:2368/",
        notify: false,
        files: ["content/themes/**/!(*.scss)"],
        port: 7000,
    });

    gulp.watch(["**/*.scss"], ['sass']);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("content/themes/blog/assets/stylesheets/bundle.scss")
        .pipe($.sassGlob())
        .pipe($.sass())
        .pipe($.autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest("content/themes/blog/assets/stylesheets"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
