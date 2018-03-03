var gulp   = require('gulp');
var config = require('../config.js');
var image  = require('gulp-image');

gulp.task('copy:fonts', function() {
    return gulp
        .src(config.src.fonts + '/**/*.{svg,ttf,eot,woff,woff2}')
        .pipe(gulp.dest(config.dest.fonts));
});

gulp.task('copy:lib', function() {
    return gulp
        .src(config.src.lib + '/**/*.*')
        .pipe(gulp.dest(config.dest.lib));
});
gulp.task('copy:manifest', function() {
    return gulp
        .src(config.src.root + '/manifest.json')
        .pipe(gulp.dest(config.dest.root));
});
gulp.task('copy:rootfiles', function() {
    return gulp
        .src(config.src.root + '/*.*')
        .pipe(gulp.dest(config.dest.root));
});

gulp.task('copy:img', function() {
    return gulp
        .src([
            config.src.img + '/**/*.{jpg,png,jpeg,svg,gif,jpf}',
            '!' + config.src.img + '/svgo/**/*.*'
        ])
        .pipe(gulp.dest(config.dest.img));
});

gulp.task('copy:img:min', function() {
    return gulp
        .src([
            config.src.img + '/**/*.{jpg,png,jpeg,svg,gif,jpf}',
            '!' + config.src.img + '/svgo/**/*.*'
        ])
        .pipe(image())
        .pipe(gulp.dest(config.dest.img));
});


gulp.task('copy', [
    // config.env === 'production' ? 'copy:img:min' : 'copy:img',
    // 'copy:rootfiles',
    'copy:lib',
    'copy:fonts',
    'copy:manifest'
]);
gulp.task('copy:watch', function() {
    gulp.watch(config.src.img+'/*', ['copy']);
});