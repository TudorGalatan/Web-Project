const { src, dest, watch } = require('gulp');
const scss = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');



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



function getJS ()
{
	return src(['./node_modules/bootstrap/dist/js/bootstrap.min.js', './node_modules/jquery/dist/jquery.min.js'], { sourcemaps: true })
	/* .pipe(concat('app.min.js')) */
	.pipe(dest('src/js', { sourcemaps: true }))
}



function getCSS ()
{
	return src('node_modules/bootstrap/dist/css/bootstrap.min.css', { sourcemaps: true })
	.pipe(concat('app.min.css'))
	.pipe(dest('src/css', { sourcemaps: true }))
}



exports.css = css;
exports.watch = watchCode;
exports.getJS = getJS;
exports.getCSS = getCSS;