var browserSync = require('browser-sync');
		gulp = require('gulp'),
		sass = require('gulp-sass');

gulp.task('browser-sync', function()
{
	browserSync({
		server:
		{
			baseDir: 'app'
		},
		notify: false
	});
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

gulp.task('watch', function()
{
	gulp.watch('sass/**/*.sass', gulp.parallel('sass'));
	gulp.watch('*.html', gulp.parallel('html'))
});

gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));