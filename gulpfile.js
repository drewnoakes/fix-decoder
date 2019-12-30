// Include gulp
var gulp = require('gulp');

// Include plugins dependencies
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

// Copy internal js files
gulp.task('app', function() {
	return gulp.src('src/scripts/app/*.js')
        .pipe(gulp.dest('dist/scripts/app'))
});

// Copy external js files which are already minified
gulp.task('lib', function() {
	return gulp.src(
		[
			'node_modules/jquery/dist/jquery.min.js',
			'node_modules/lodash/dist/lodash.min.js',
			'node_modules/handlebars/dist/handlebars.min.js'
		])
        .pipe(gulp.dest('dist/scripts/lib'))
});

// Copy & minify external js files which are not already minified
gulp.task('lib-min', function() {
	return gulp.src(
		[
			'node_modules/requirejs/require.js',
		])
        .pipe(uglify())
		.pipe(rename(function (path) {
			path.extname = '.min.js';
		}))
        .pipe(gulp.dest('dist/scripts/lib'))
});

// Copy styles.css file
gulp.task('styles', function() {
	return gulp.src('src/styles/styles.css')
        .pipe(gulp.dest('dist/styles'))
});

// Copy index.html file
gulp.task('index', function() {
	return gulp.src('src/index.html')
		.pipe(gulp.dest('dist'));
});

// Copy github-icon.png file
gulp.task('img', function() {
	return gulp.src('src/img/github-icon.png')
        .pipe(gulp.dest('dist/img'))
});

gulp.task('default', gulp.parallel('app', 'lib', 'lib-min', 'styles', 'index', 'img'));
