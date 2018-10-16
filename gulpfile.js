const gulp = require('gulp');
const sass = require('gulp-sass');

const basePath = './src';
const baseSassPath = `./stylesheets`;
const dateFiles = './data/**/*.json';
const baseAppPath = `./mockup/${basePath}`;
const appDataPath = `${baseAppPath}/data`;
const mockupPublicPath = `./mockup/public`;
const distPath = './dist';

const stylesheets = [
    `${baseSassPath}/bc-main.scss`,
    `${baseSassPath}/dotgov-main.scss`
];

const compileSass = (path, destination) => {
    return gulp
        .src(path)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(destination));
};

gulp.task('move-data-into-app', () => {
    return gulp.src([dateFiles]).pipe(gulp.dest(appDataPath));
});

gulp.task('sass', () => {
    stylesheets.forEach(stylesheet => {
        compileSass(stylesheet, `${distPath}/stylesheets`);
        compileSass(stylesheet, `${baseAppPath}`);
    });
});

gulp.task('build', ['sass', 'move-data-into-app']);

gulp.task('watch:assets', function() {
	gulp.watch('./data/**/*.json', ['build']);
    gulp.watch('./stylesheets/**/*.scss', ['build']);
});


