var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['build', 'watch']);

gulp.task('sass', function() {
	return gulp.src('src/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'));
});

gulp.task('moveIndex', function() {
	return gulp.src('src/index.html')
	.pipe(gulp.dest('.'));
});

gulp.task('build', ['sass', 'moveIndex']);

gulp.task('watch', function() {
	return gulp.watch(['src/**/*.scss', 'src/index.html'], ['build']);
})