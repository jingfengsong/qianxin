// 导入 gulp
const gulp = require('gulp')
// 导入 gulp-cssmin
const cssmin = require('gulp-cssmin')
// 导入 gulp-autoprefixer
const autoPrefixer = require('gulp-autoprefixer')
// 导入 gulp-sass
const sass = require('gulp-sass')(require('sass'))
// 导入 gulp-uglify
const uglify = require('gulp-uglify')
// 导入 gulp-babel
const babel = require('gulp-babel')
// gulp-babel打包会加严格模式
// 导入 取消严格模式 插件
// const removeUseStrict = require('gulp-remove-use-strict');
// 导入 htmlmin
const htmlmin = require('gulp-htmlmin')

// 导入删除文件插件 del
const del = require('del')

// 导入基于 node 书写的服务器
const webserver = require('gulp-webserver')

// 导入 gulp-file-include
const fileInclude = require('gulp-file-include')



// 打包css
const cssHandler = function () {
    return gulp
        .src('./src/css/*.css')
        .pipe(autoPrefixer())
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/css/'))
}
// 打包sass
const sassHandler = function () {
    return gulp
        .src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(autoPrefixer())
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/sass/'))
}

// 打包js
const jsHandler = function () {
    return gulp
        .src('./src/js/*.js')
        .pipe(babel({
            // babel@7,presets:['ES2015']
            presets: ['@babel/env']
        }))
        // .pipe(removeUseStrict())
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'))
}

// 打包 html 文件
const htmlHandler = function () {
    return gulp
        .src('./src/*.html')
        .pipe(fileInclude({ // 根据你的配置导入对应的 html 参数
            prefix: '@-@', //你自定义的标识符
            basepath: './src/components', //基准目录，你的组件文件都在哪一个文件夹
        }))
        .pipe(htmlmin({ // 通过你配置的参数来进行压缩
            collapseWhitespace: true, // 表示移除空格
            removeEmptyAttributes: true, // 表示移除空的属性(仅限于原生属性)
            collapseBooleanAttributes: true, // 移除 checked 类似的布尔值属性
            removeAttributeQuotes: true, // 移除属性上德双引号
            minifyCSS: true, // 压缩内嵌式 css 代码（只能是基本压缩，不能主动添加前缀）
            minifyJS: true, // 压缩内嵌式 js 代码（只能是基本压缩，不能进行转码）
            removeStyleLinkTypeAttributes: true, //移除 style 和 link 标签上 type 属性的
            removeScriptTypeAttributes: true, // 移除 script 标签上的默认 type 属性
        }))
        .pipe(gulp.dest('./dist/'))
}

// 打包 images 文件的任务
const imgHandler = function () {
    // imagemixin
    // 很难成功
    // 压缩比例只有 7 级，需要网络好， 1024kb => 1023kb
    // .pipe(imagemixin())
    return gulp
        .src('./src/image/**')
        .pipe(gulp.dest('./dist/image/'))
}

// 打包 video
const videoHandler = function () {
    return gulp
        .src('./src/video/**')
        .pipe(gulp.dest('./dist/video/'))
}

// 打包 audeo
const audioHandler = function () {
    return gulp
        .src('./src/audio/**')
        .pipe(gulp.dest('./dist/audio/'))
}

// 打包 第三方 的任务
const libHandler = function () {
    return gulp
        .src('./src/lib/**/*')
        .pipe(gulp.dest('./dist/lib/'))
}

// 打包 fonts 
const fontHandler = function () {
    return gulp
        .src('./src/font/**')
        .pipe(gulp.dest('./dist/font/'))
}

// 创建一个 删除 dist 目录的任务
const delHandler = function () {
    return del(['./dist/'])
}

// 创建一个启动 服务器 的任务
const webHandler = function () {
    return gulp
        .src('./dist')
        .pipe(webserver({
            host: 'www.jfs.com', // 域名（可以配置自定义域名）
            port: '86', // 端口号
            livereload: true, // 但文件修改的时候，是否主动刷新页面
            open: './', // 默认打开哪一个文件（从 dist 目录以后的目录开始书写）
            proxies: [ // 配置你的所有代理
                // 每一个代理就是一个对象数据类型
                // 注意：如果没有代理，怒要些空对象
                {
                    // 代理标识符
                    source: '/dt',
                    // 代理目标地址
                    target: 'https://www.duitang.com/napi/blog/list/by_filter_id/?'
                },
                {
                    source: '/gx',
                    target: 'https://songjf.com'
                },
                {
                    source: '/hf',
                    target: 'https://devapi.qweather.com/v7/weather/now'
                }
            ]
        }))
}

// 创建一个 监控 任务
const watchHandler = function () {
    gulp.watch('./src/css/*.css', cssHandler)
    gulp.watch('./src/sass/*.scss', sassHandler)
    gulp.watch('./src/js/*.js', jsHandler)
    gulp.watch('./src/*.html', htmlHandler)
    gulp.watch('./src/image/**', imgHandler)
}

// 导出打包 xxx 的任务
module.exports.cssHandler = cssHandler
module.exports.sassHandler = sassHandler
module.exports.jsHandler = jsHandler
module.exports.htmlHandler = htmlHandler
module.exports.imgHandler = imgHandler
module.exports.videoHandler = videoHandler
module.exports.audioHandler = audioHandler
module.exports.libHandler = libHandler
module.exports.fontHandler = fontHandler
module.exports.delHandler = delHandler


// 添加完毕 监控任务以后，修改 default 任务
module.exports.default = gulp.series(
    delHandler,
    gulp.parallel(cssHandler, sassHandler, jsHandler, htmlHandler, imgHandler, videoHandler, audioHandler, libHandler, fontHandler),
    webHandler,
    watchHandler
)