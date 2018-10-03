const gulp = require('gulp');
const sass = require('gulp-sass');

const basePath = './src';
const baseSassPath = `./stylesheets`;
const mockupPublicPath = `./mockup/public`;
const distPath = './dist';


const stylesheets = [
	`${baseSassPath}/bc-main.scss`,
	`${baseSassPath}/dotgov-main.scss`
];

const compileSass = (path, destination) => {
	return gulp.src(path)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(destination));
};

gulp.task('sass', () => {
	stylesheets.forEach((stylesheet) => {
		compileSass(stylesheet, `${distPath}/stylesheets`);
		compileSass(stylesheet, `${mockupPublicPath}/stylesheets`);
	})
});

gulp.task('build', ['sass']);