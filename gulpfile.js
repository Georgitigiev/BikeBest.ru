"use strict";

var gulp       			= require('gulp'),
    babel  	   			= require('gulp-babel'),
    livereload 			= require('gulp-livereload'),
    connect    			= require('gulp-connect'),
    concat     			= require('gulp-concat'),
    autoprefixer		= require('gulp-autoprefixer'),
    less				= require('gulp-less'),
    rename				= require('gulp-rename'),
    minifyCss			= require('gulp-clean-css'),
    imgmini             = require('gulp-imagemin'),
    cleanCSS            = require('gulp-clean-css'),
    autoprefixer        = require('gulp-autoprefixer'),
    minifyjs            = require('gulp-minify');


var path = {
 	js:[
        // "bower_components/jquery/dist/jquery.min.js",
        "bower_components/glidejs/dist/glide.min.js"

	]
 };







//Подключени к локальному серверу

gulp.task('connect', function() {
  connect.server({
    root: 'dist/',
    livereload: true,
    port:1122
  });
});

//Подключени к локальному серверу




// Собираем .less файлы в .css
gulp.task('build_css', function(){
	return gulp.src('src/less/*.less')
		   .pipe(less())
		   .pipe(concat('project.css'))
           .pipe(autoprefixer())
		   .pipe(gulp.dest('dist/style'))
		   .pipe(connect.reload());
})
// Собираем .less файлы в .css

gulp.task('bower_js', function(){
    return gulp.src(path.js)
                    .pipe(concat('bower_final.js'))
                     .pipe(gulp.dest('dist/js/'))
                        .pipe(connect.reload());
    });

gulp.task('build_js', function(){
	return gulp.src('src/script/*.js')
	    .pipe(babel({
            presets: ['es2015']
         }))
		.pipe(concat('final.js'))
		.pipe(gulp.dest('dist/js/'))
		.pipe(connect.reload());
})

gulp.task('vendor_js', function(){
    return gulp.src(["dist/js/bower_final.js","dist/js/final.js"])
                     .pipe(concat('final.min.js'))
                     .pipe(minifyjs({
                       compress: true    
                     }))
                     
                      .pipe(gulp.dest('dist/js/'))
                        .pipe(connect.reload());
    });




gulp.task('img_mini', function(){
    return gulp.src('src/img/*')
    .pipe(imgmini())
    .pipe(gulp.dest('dist/img/'))
})


// Собираем html файлы
gulp.task('html', function(){
	return gulp.src('src/*.html')
            	.pipe(gulp.dest('dist/'))
            	.pipe(connect.reload());
	})
// Собираем html файлы

//Данная задача запускает все остальные задачи
gulp.task('default', ['connect', 'html','build_css','build_js','bower_js','vendor_js','img_mini','watch']);
//Данная задача запускает все остальные задачи

//Это задача следит за изменениями в тасках которые указанны в здаче
gulp.task('watch',function(){
    gulp.watch('src/less/*.less',['build_css']);
    gulp.watch('src/script/*.js',['build_js']);
    gulp.watch('src/*.html',['html']);
	});
//Это задача следит за изменениями в тасках которые указанны в здаче