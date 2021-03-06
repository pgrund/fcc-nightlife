import critical from 'critical';
import babelify from 'babelify';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import gulp from 'gulp';
import plugins from 'gulp-load-plugins';
import source from 'vinyl-source-stream';
import gls from 'gulp-live-server';


/* ----------------- */
/* Development
/* ----------------- */

gulp.task('development', ['scripts', 'styles', 'copy', 'serve'], () => {
    gulp.watch('./client/scss/**/*.scss', ['styles']);
    gulp.watch('./client/components/**/*.js', ['scripts']);
    gulp.watch('./client/*.html', ['copy']);
  //  gulp.watch(['server.js', './app/**/*.js'],['serve'])
});


/* ----------------- */
/* Scripts
/* ----------------- */

gulp.task('scripts', () => {
    return browserify({
        'entries': ['./client/components/app.js'],
        'debug': true,
        'transform': [
            babelify.configure({
                'presets': ['es2015', 'react']
            })
        ]
    })
    .bundle()
    .on('error', function () {
        var args = Array.prototype.slice.call(arguments);

        plugins().notify.onError({
            'title': 'Compile Error',
            'message': '<%= error.message %>'
        }).apply(this, args);

        this.emit('end');
    })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(plugins().sourcemaps.init({'loadMaps': true}))
    .pipe(plugins().sourcemaps.write('.'))
    .pipe(gulp.dest('./client/dist/js/'));
    //.pipe(browserSync.stream());
});


/* ----------------- */
/* Styles
/* ----------------- */

gulp.task('styles', () => {
    return gulp.src('./client/scss/**/*.scss')
        .pipe(plugins().sourcemaps.init())
        .pipe(plugins().sass().on('error', plugins().sass.logError))
        .pipe(plugins().sourcemaps.write())
        .pipe(gulp.dest('./client/dist/css/'))
        //.pipe(browserSync.stream())
        ;
});


/* ----------------- */
/* HTML
/* ----------------- */

gulp.task('copy', () => {
  return gulp.src('./client/*.html')
    .pipe(gulp.dest('./client/dist/'))
  //  .pipe(browserSync.stream())
  ;
});

gulp.task('html', ['cssmin'], () => {
    return gulp.src('*.html')
        .pipe(critical.stream({
            'base': 'client/dist/',
            'inline': true,
            'extract': true,
            'minify': true,
            'css': ['./client/dist/css/style.css']
        }))
        .pipe(gulp.dest('client/dist'));
});


/* ----------------- */
/* Cssmin
/* ----------------- */

gulp.task('cssmin', () => {
    return gulp.src('./client/scss/**/*.scss')
        .pipe(plugins().sass({
            'outputStyle': 'compressed'
        }).on('error', plugins().sass.logError))
        .pipe(gulp.dest('./client/dist/css/'));
});


/* ----------------- */
/* Jsmin
/* ----------------- */

gulp.task('jsmin', () => {
    var envs = plugins().env.set({
        'NODE_ENV': 'production'
    });

    return browserify({
        'entries': ['./client/components/app.js'],
        'debug': false,
        'transform': [
            babelify.configure({
                'presets': ['es2015', 'react']
            })
        ]
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(envs)
    .pipe(buffer())
    .pipe(plugins().uglify())
    .pipe(envs.reset)
    .pipe(gulp.dest('./client/dist/js/'));
});

gulp.task('serve', function() {
   //1. run your script as a server
   var server = gls.new('server.js');
   server.start();


   //use gulp.watch to trigger server actions(notify, start or stop)
   gulp.watch(['client/dist/**/*.css', 'client/dist/**/*.html', 'client/dist/**/*.js'], function (file) {
     console.log('client side changed, reload ...');
     server.notify.apply(server, [file]);
   });
   gulp.watch(['server.js', 'app/**/*.js'], function() {
     console.log('server side changed, restart server ...');
     server.start.bind(server); //restart my server
   });

});

/* ----------------- */
/* Taks
/* ----------------- */

gulp.task('default', ['development']);
gulp.task('deploy', ['html', 'jsmin']);
