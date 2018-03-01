var gulp   = require('gulp');
var config = require('../config');
var server = require('./server');
gulp.task('watch', 
    ['copy:watch',
    'webpack:watch',
    'sass:watch',
    'html:watch'
]).on('change', server.reload);