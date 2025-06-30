import gulp from 'gulp';
import gulpShell from 'gulp-shell';

gulp.task('default', gulpShell.task('parcel ./starter/index.html --open'));


gulp.task('test', gulpShell.task('npm run test'));
