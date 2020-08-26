var gulp = require('gulp'),
		postcss = require('gulp-postcss'),
		autoprefixer = require('autoprefixer'),
		rigger = require('gulp-rigger');

gulp.task('myHtml', function () {
	return gulp.src('src/drive.html')
		.pipe(rigger())
		.pipe(gulp.dest('build'));
});

gulp.task('myCss', function () {
	return gulp.src('src/styles/style.css')
		.pipe(postcss([autoprefixer]) )
		.pipe(gulp.dest('build/styles'));
});

gulp.task('myImages', function () {
	return gulp.src('src/images/*')
		.pipe(gulp.dest('build/images'));
});

gulp.task('myFonts', function () {
	return gulp.src('src/fonts/*')
		.pipe(gulp.dest('build/fonts'));
});

gulp.task('myFinalBuild', gulp.series(['myHtml', 'myCss', 'myImages', 'myFonts']));


