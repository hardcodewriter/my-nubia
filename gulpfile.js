var gulp = require('gulp');

var concat = require('gulp-concat'),
	babel = require('gulp-babel'),
	miniImage = require('gulp-imagemin'),
	less = require('gulp-less'),
	miniCss = require('gulp-minify-css'),
	miniHtml = require('gulp-minify-html'),
	sass = require('gulp-sass'),
	miniJs = require('gulp-uglify'),
	del = require('del'),
	connect = require('gulp-connect'),
	flatten = require('gulp-flatten'),
	rename = require('gulp-rename');
	sass.compiler = require('node-sass');
/**
 * 定义一个js文件夹加载任何文件夹的js的函数
 */
var miniAnyJs = function (dir) {
	gulp.src('app/static/js/' + dir + '/*.js')
		.pipe(concat(dir + '.js'))        //合并
		.on('error',function (err) {
            console.log(err);
            this.emit('end');
        })
		.pipe(babel({                    //es6 -> es5
			presets: ['@babel/env']
		}))
		// .pipe(miniJs())					 //压缩
        .on('error',function (err) {
            console.log(err);
            this.emit('end');
        })
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('dist/app/static/js/'))  //输出到该文件夹下
		.pipe(connect.reload());
}
//将scss变更为css样式

/**
 * 定义一个css文件夹加载任何文件夹的css的函数
 */

var miniAnyCss = function(dir) {
	gulp.src('app/static/css/'+dir+'/*.*')
		.pipe(sass().on('error', sass.logError))
		.pipe(concat(dir+'.css'))
		// .pipe(miniCss())
		.on('error',function (err) {
			console.log(err);
			this.emit('end');
		})
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('dist/app/static/css/'))
		.pipe(connect.reload());
}
//压缩合并index主页的js
gulp.task("miniIndexJs", function () {
	miniAnyJs('index');
	miniAnyJs('login');
	miniAnyJs('register');
	miniAnyJs("shop-car");
	miniAnyJs('until');
	miniAnyJs('nubiaX');
});
//压缩合并index的css
gulp.task("miniIndexCss", function () {
	miniAnyCss('index');
	miniAnyCss('login');
	miniAnyCss("tel_register");
	miniAnyCss('register');
	miniAnyCss("shop-car");
	miniAnyCss('blank_shopcar');
	miniAnyCss('common');
	miniAnyCss('nubiaX');
});
//压缩html
gulp.task('miniHtml', function () {
	gulp.src('app/*.html')
		// .pipe(miniHtml())
        .on('error',function (err) {
            console.log(err);
            this.emit('end');
        })
		.pipe(gulp.dest('dist/app/'))
		.pipe(connect.reload());
})
//压缩图片
gulp.task('miniImage', function () {
	gulp.src('app/static/images/**/*')
		// .pipe(miniImage())
		.pipe(flatten())
		.pipe(gulp.dest('dist/app/static/images/'))
	// .pipe(connect.reload());
})
//执行所有压缩任务
gulp.task('miniAll', ['miniIndexJs', "miniIndexCss", 'miniHtml'])
//开启服务器
gulp.task('server', function () {
	connect.server({
		root: 'dist',
		port: '7777',
		livereload: true
	});
})
//开启事件监听
gulp.task('watch', function () {
	gulp.watch('app/**/*.*', ['miniAll']);
	gulp.watch('app/app/static/images/**/*', ['miniImage']);
})
//开启所有事件
gulp.task('default', ['miniAll', 'miniImage', 'watch', 'server']);
gulp.task('clean', function () {
	del('dist')
})