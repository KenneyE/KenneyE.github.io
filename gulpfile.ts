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

const build = series(sass, moveIndex)

function watch () {
	return gulpWatch(['src/assets/sass/**/*.scss', 'src/index.html'], build);
}

exports.watch = series(watch)
exports.build = build
exports.default = build