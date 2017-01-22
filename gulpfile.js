const gulp = require('gulp');
const browserSync = require('browser-sync');
const webpack = require('gulp-webpack');
const flow = require('flow-bin');
const webpackConfig = require('./webpack.config.js');
const execFile = require('child_process').execFile;

gulp.task('serve', [], () => {
  browserSync({
    notify: false,
    logPrefix: 'PSK',
    https: false,
    port: 8000,
    browser: process.platform.startsWith('win') ? null : 'google-chrome',
    server: {
      baseDir: ['www']
    }
  });
  gulp.watch([
    './www/dist/bundle.js'
  ]).on('change', browserSync.reload);

  return gulp.src('./www/elements/main.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./www/dist/'));
});

gulp.task('flow', callback => {
  execFile(flow, ['check'], (err, stdout) => {
    if (err) {
      return console.log(stdout);
    }

    return callback();
  });
});

gulp.task('default', ['flow']);
