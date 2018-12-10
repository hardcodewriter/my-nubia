var gulp = require('gulp');
var uglify = require("gulp-uglify");
var rename = require('gulp-rename');
const babel = require('gulp-babel');
var connect = require('gulp-connect');
var csso = require('gulp-csso');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const rev = require('gulp-rev');
const del = require('del');
var runSequence = require('run-sequence');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});
// 直接压缩js文件
gulp.task('minijs',()=>
gulp.src('app/**/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())  
    .pipe(rev())               
    .pipe(gulp.dest('dist'))
    .pipe( rev.manifest() )
    .pipe( gulp.dest( 'rev/js'))
)    
//压缩css文件
gulp.task('minicss', function () {
    return gulp.src('app/**/*.css')
        .pipe(csso({
            restructure: false,
            sourceMap: true,
            debug: true
        }))
        .pipe(gulp.dest('./out'));
});
//压缩h5文件
gulp.task('minih5', () => {
    return gulp.src('app/**/*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('dist'));
  });
//压缩图片文件
gulp.task('default', () =>
    gulp.src('app/static/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);
//es6转换es5环境
gulp.task('default', () =>
    gulp.src('src/app.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist'))
)
//监听js、html改变
gulp.task('watch', function() {
    gulp.watch('app/**/*.html', ['minihtml'])
    gulp.watch('app/**/*.js', ['minijs'])
})
//重命名
gulp.task("rename",()=>
    gulp.src("app/static/**/*.js")
    .pipe(rename(function (path) {
    path.dirname += "/ciao";
    path.basename += "-goodbye";
    path.extname = ".md";
    }))
    .pipe(gulp.dest("dist"))
)
//重开服务器
gulp.task('connect', function() {
    connect.server({
        root: 'dist',
        port: '7777',
        livereload: true
    });
  });