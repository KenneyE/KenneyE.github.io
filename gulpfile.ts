var { series, dest, src, watch: gulpWatch } = require('gulp');
var gulpSass = require('gulp-sass')(require('sass'));

function sass() {
	return src('src/assets/sass/**/*.scss')
		.pipe(gulpSass())
		.pipe(dest('assets/css'));
}
function moveIndex() {
	return src('src/index.html')
		.pipe(dest('.'));
}
function moveJs() {
	return src('src/assets/js/main.js')
		.pipe(dest('assets/js'));
}

const build = series(sass, moveIndex, moveJs)

function watch () {
	return gulpWatch(['src/assets/sass/**/*.scss', 'src/assets/js/main.js', 'src/index.html'], build);
}

exports.watch = series(watch)
exports.build = build
exports.default = build