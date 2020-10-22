const gulp = require('gulp');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const importCSS = require('postcss-import');
const media = require('postcss-media-minmax');
const autoprefixer = require('autoprefixer');

const {
  src,
  dest,
  series,
  watch,
} = gulp;

const styles = () => src('main.css')
  .pipe(postcss([
    importCSS,
    media,
    autoprefixer,
  ]))
  .pipe(rename('index.css'))
  .pipe(dest('dist'));

const watchFiles = () => {
  watch('src/**/*.css', series(styles));
};

exports.styles = styles;
exports.watch = watch;

exports.default = series(styles, watchFiles);
