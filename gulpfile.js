// Include gulp
var gulp = require('gulp');

// Include plugins dependencies
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

// Copy internal js files
gulp.task('app', function() {
	return gulp.src('src/scripts/app/*.js')
        .pipe(gulp.dest('dist/scripts/app'))
});

// Copy & minify external js files
gulp.task('lib', function() {
	return gulp.src(
		[
			'node_modules/jquery/dist/jquery.js',
			'node_modules/lodash/dist/lodash.js',
			'node_modules/requirejs/require.js',
			'node_modules/handlebars/dist/handlebars.js'
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

// Copy incdex.html file
gulp.task('index', function() {
	return gulp.src('src/index.html')
		.pipe(gulp.dest('dist'));
});

// Copy github-icon.png file
gulp.task('img', function() {
	return gulp.src('src/img/github-icon.png')
        .pipe(gulp.dest('dist/img'))
});

gulp.task('default', ['app', 'lib', 'styles', 'index', 'img']);
