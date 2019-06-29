var browserSync = require('browser-sync').create();
		gulp = require('gulp'),
		sass = require('gulp-sass');

gulp.task('browser-sync', function()
{
	browserSync.init({
		injectChanges: true,
		server: 'app'
	});

	browserSync.watch('app/**/*.*').on('change', browserSync.reload)
});

gulp.task('sass', function()
{
	return gulp.src('app/sass/**/*.sass')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({	stream: true	}))
});

gulp.task('html', function()
{
	return gulp.src('*.html')
	.pipe(browserSync.reload({	stream: true	}))
});

gulp.task('watch', gulp.parallel('browser-sync', 'sass', 'html'), function()
{
	gulp.watch('sass/**/*.sass', gulp.parallel('sass'));
	gulp.watch('*.html', gulp.parallel('html'))
});

gulp.task('default', gulp.parallel('watch'));