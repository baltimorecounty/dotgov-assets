const gulp = require('gulp');
const sass = require('gulp-sass');

const basePath = './src';
const baseSassPath = `./stylesheets`;
const distPath = './dist';
const stylesheets = [
	`${baseSassPath}/bc-main.scss`,
	`${baseSassPath}/dotgov-main.scss`
];

const compileSass = (path) => {
	return gulp.src(path)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(`${distPath}/stylesheets`));
};

gulp.task('sass', () => {
	stylesheets.forEach((stylesheet) => {
		compileSass(stylesheet);
	})
});

gulp.task('build', ['sass']);