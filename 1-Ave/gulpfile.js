var gulp = require('gulp');
var sass = require('gulp-sass');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');

gulp.task('scss', function () {
    return gulp.src('scss/**/*.scss') 
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('css/'));
});

gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', gulp.series('scss'))
});
 
var fontName = 'Icons';
gulp.task('iconfont', function(done){
  gulp.src(['img/svg/*.svg'])
    .pipe(iconfontCss({
      fontName: fontName,
      path: 'scss/utils/_icons_template.scss',
      targetPath: '../scss/utils/_icons.scss',
      fontPath: '../fonts/'
    }))
    .pipe(iconfont({
      fontName: fontName,
      normalize: true,
      fontHeight: 1001,
      formats: ['svg', 'ttf', 'eot', 'woff', 'woff2']
     }))
    .pipe(gulp.dest('./fonts'));

    done();
});
