const { src, dest, watch } = require('gulp');
const scss = require('gulp-sass');
const minifyCSS = require('gulp-csso');



function css ()
{
  return src('./src/scss/*.scss')
    .pipe(scss())
    .pipe(minifyCSS())
    .pipe(dest('./src/css'))
}



function watchCode ()
{
	watch('./src/scss/*.scss', css)
}


exports.css = css;
exports.watch = watchCode;