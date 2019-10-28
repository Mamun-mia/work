var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
concatCss = require('gulp-uglify'),
concat = require('gulp-concat-css'),
concatCss = require('gulp-css'),
concat = require('gulp-concat');

// gulp.task('css', function () {
//   gulp.src('./app/assets/styles/concat/css/font-awesome.min.css')
//     .pipe(concat("styles/bundle.css"))
//     .pipe(cssMin())
//     .pipe(gulp.dest('./app/temp/styles'));
// });

gulp.task('default', ['css']);

gulp.task("concat", function(){
  return gulp.src('./app/assets/styles/concat/css/font-awesome.min.css')
  .pipe(concat("bundle.css"))
  .pipe(gulp.dest('./app/temp/styles/css'))
});

// var concat = require('gulp-concat');
 
gulp.task('scripts', function() {
  return gulp.src('./app/assets/styles/concat/js/jquery.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./app/temp/styles/js'));
});

// gulp.task('concat', function () {
//   return gulp.src('./app/assets/styles/concat/css/style.css')
//     .pipe(concat("bundle.css"))
//     .pipe(gulp.dest('./app/temp/styles/css/'));
// });


gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
     .on('error', function(errorInfo) {
       console.log(errorInfo.toString());
       this.emit('end');
     })
    .pipe(gulp.dest('./app/temp/styles'));
});