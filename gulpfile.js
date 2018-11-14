const gulp = require('gulp');
const sass = require('gulp-sass');

const basePath = './src';
const baseSassPath = `./stylesheets`;
const dataFiles = './data/**/*.json';
const imageFiles = './img/**/*';
const baseAppPath = `./mockup/${basePath}`;
const appDataPath = `${baseAppPath}/data`;
const appImagePath = `${baseAppPath}/img`;
const distPath = './dist';

const stylesheets = [
    `${baseSassPath}/bc-main.scss`,
    `${baseSassPath}/design-system.scss`,
    `${baseSassPath}/dotgov-main.scss`
];

const compileSass = (path, destination) => {
    return gulp
        .src(path)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(destination));
};

gulp.task('move-data-into-app', () => {
    return gulp.src([dataFiles]).pipe(gulp.dest(appDataPath));
});

gulp.task('move-images-into-app', () => {
    return gulp.src([imageFiles]).pipe(gulp.dest(appImagePath));
});

gulp.task('sass', () => {
    stylesheets.forEach(stylesheet => {
        compileSass(stylesheet, `${distPath}/stylesheets`);
        compileSass(stylesheet, `${baseAppPath}`);
    });
});

gulp.task('build', ['sass', 'move-data-into-app', 'move-images-into-app']);

gulp.task('watch:assets', function() {
    gulp.watch('./img/**/*', ['build']);
    gulp.watch('./data/**/*.json', ['build']);
    gulp.watch('./stylesheets/**/*.scss', ['build']);
});
