var gulp    = require('gulp');
var stylus  = require('gulp-stylus');
var gws     = require('gulp-ws');
var connect = require('gulp-connect');
var wiredep = require('wiredep').stream;



// подключается к локальному серверу
gulp.task('connect', function()
{
    connect.server({
        root: 'public',
        port: 8080,
        livereload: true
    });
});

// таск сборки и перезагрузки каскадных таблиц стилей
gulp.task('css', function()
{
    return gulp.src('./public/css/style.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./public/css'))
        .pipe(connect.reload());
});

// такс перезагрузки html файлов
gulp.task('html', function () {
    gulp.src(['./public/*.html','./public/css/*.css'])
        .pipe(connect.reload());
});


// подключает js и css модули из bower_components
gulp.task('bower', function()
{
    gulp.src('./public/index.html')
        .pipe(wiredep({
            "directory":"public/bower_components"
        }))
        .pipe(gulp.dest('./public'));
});

// следит за изменением html и css файлов, и запускает таски для релоада
gulp.task('watch', function () {
    gulp.watch(['./public/*.html','./public/css/*.css'], ['html']);
    gulp.watch(['./public/css/style.styl'], ['css']);
    gulp.watch(['./bower.json'], ['bower']);
});


gulp.task('default', ['css', 'connect', 'bower', 'watch']);
