var gulp = require('gulp');
		browserSync = require('browser-sync');

gulp.task('browser-sync', function()
{
	browserSync
	({
		server:
		{
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('watch', gulp.parallel('browser-sync'), function()
{
	gulp.watch('app/**/*.html', browserSync.reload);
	gulp.watch('app/css/**/*.css', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('default', ['watch']);