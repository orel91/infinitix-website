const gulp = require('gulp');
const path = require('path');
const zip = require('gulp-zip');
const minimist = require('minimist');
const fs = require('fs');

const knownOptions = {
  string: 'packageName',
  string: 'packagePath',
  default: { packageName: 'Package.zip', packagePath: path.join(__dirname, '_package') },
};

const options = minimist(process.argv.slice(2), knownOptions);

gulp.task('default', () => {
  const packagePaths = ['**',
    '!**/_package/**',
    '!**/typings/**',
    '!typings',
    '!_package',
    '!gulpfile.js'];

  // add exclusion patterns for all dev dependencies
  const packageJSON = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
  const devDeps = packageJSON.devDependencies;

  Object.keys(devDeps).forEach((propName) => {
    const excludePattern1 = `!**/node_modules/${propName}/**`;
    const excludePattern2 = `!**/node_modules/${propName}`;
    packagePaths.push(excludePattern1);
    packagePaths.push(excludePattern2);
  });

  return gulp.src(packagePaths)
    .pipe(zip(options.packageName))
    .pipe(gulp.dest(options.packagePath));
});
