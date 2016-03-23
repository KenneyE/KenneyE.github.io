var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['sass', 'watch']);

gulp.task('sass', function() {
	gulp.src('src/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
	gulp.watch(['src/**/*.scss'], ['sass']);
})