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
    // 导入 htmlmin
const htmlmin = require('gulp-htmlmin')

// 导入删除文件插件 del
const del = require('del')

// 导入基于 node 书写的服务器
const webserver = require('gulp-webserver')



// 打包css
const cssHandler = function() {
        return gulp
            .src('./src/css/*.css')
            .pipe(autoPrefixer())
            .pipe(cssmin())
            .pipe(gulp.dest('./dist/css/'))
    }
    // 打包sass
const sassHandler = function() {
    return gulp
        .src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(autoPrefixer())
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/sass/'))
}

// 打包js
const jsHandler = function() {
    return gulp
        .src('./src/js/*.js')
        .pipe(babel({
            // babel@7,presets:['ES2015']
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'))
}

// 打包 html 文件
const htmlHandler = function() {
    return gulp
        .src('./src/*.html')
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
const imgHandler = function() {
    // imagemixin
    // 很难成功
    // 压缩比例只有 7 级，需要网络好， 1024kb => 1023kb
    // .pipe(imagemixin())
    return gulp
        .src('./src/image/**')
        .pipe(gulp.dest('./dist/image/'))
}

// 打包 video
const videoHandler = function() {
    return gulp
        .src('./src/video/**')
        .pipe(gulp.dest('./dist/video/'))
}

// 打包 audeo
const audioHandler = function() {
    return gulp
        .src('./src/audio/**')
        .pipe(gulp.dest('./dist/audio/'))
}

// 打包 第三方 的任务
const libHandler = function() {
    return gulp
        .src('./src/lib/**/*')
        .pipe(gulp.dest('./dist/lib/'))
}

// 打包 fonts 
const fontHandler = function() {
    return gulp
        .src('./src/  /**')
        .pipe(gulp.dest('./dist/font/'))
}

// 创建一个 删除 dist 目录的任务
const delHandler = function() {
    return del(['./dist/'])
}

// 创建一个启动 服务器 的任务
const webHandler = function() {
    return gulp
        .src('./dist')
        .pipe(webserver({
            host: 'www.jfs.com', // 域名（可以配置自定义域名）
            port: '8080', // 端口号
            livereload: true, // 但文件修改的时候，是否主动刷新页面
            open: './index.html', // 默认打开哪一个文件（从 dist 目录以后的目录开始书写）
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
                }
            ]
        }))

    // 启动服务器配置自定义域名
    //      + webserver 位置的 host 书写一个自己大一号的域名（www.jfs.com）
    //      + 找到电脑中的 hosts 文件
    //          -> C:/windows/system32/dircers/etc/hosts
    //          -> 注意：找到那个没有后缀的 hosts 文件
    //          -> 添加一行内容 127.0.0.1      www.jfs.com
}

// 创建一个 监控 任务
const watchHandler = function() {
    gulp.watch('./src/css/*.css', cssHandler)
    gulp.watch('./src/sass/*.scss', sassHandler)
    gulp.watch('./src/js/*.js', jsHandler)
    gulp.watch('./src/*.html', htmlHandler)
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




// 配置一个默认任务
//      默认任务就是把所有的任务一起执行了
//      gulp.series()(一个结束才径向下一个任务)   gulp.parallel(多个任务提示进行)
//      这两个方法的返回值是一个函数，返回值可以直接被当做任务函数使用
//      使用过 task 的方式创建一个 default 任务

// 1.
// gulp.task('default', () => {})

// 2.
// module.exports.default = () => {}

// 创建一个默认任务
// module.exports.default = gulp.parallel(cssHandler, sassHandler, jsHandler, htmlHandler, imgHandler, videoHandler, audioHandler, libHandler, fontHandler)

// 打包之前删除 dist 文件夹，就能保证最新

// 添加 del 之后修改 default 任务
// module.exports.default = gulp.series(
//     delHandler,
//     gulp.parallel(cssHandler, sassHandler, jsHandler, htmlHandler, imgHandler, videoHandler, audioHandler, libHandler, fontHandler)
// )

// gulp-webserver
// 基于 node 书写的服务器


// 添加完 服务器 任务以后，修改 default 任务
// module.exports.default = gulp.series(
//     delHandler,
//     gulp.parallel(cssHandler, sassHandler, jsHandler, htmlHandler, imgHandler, videoHandler, audioHandler, libHandler, fontHandler),
//     webHandler
// )

// 添加完毕 监控任务以后，修改 default 任务
module.exports.default = gulp.series(
    delHandler,
    gulp.parallel(cssHandler, sassHandler, jsHandler, htmlHandler, imgHandler, videoHandler, audioHandler, libHandler, fontHandler),
    webHandler,
    watchHandler
)

// 扩展
// gulp-file-include
//  => 作用： 在一个 html 页面你导入哪一个 html 片段
//  => 下载：cnpm i -D gulp-file-include
//  => 导入：const fileInclude = require('gulp-file-include')
//  => 导入以后得到一个处理流的函数
//  => 我们在管道函数内调用就可以了，需要传递参数


// <!-- 引入 head.html -->
// <!-- 自定义标识符include('所在位置') -->
// <!-- 再倒入的时候传递第二个参数，是一个 json 格式的对象 -->
// <!-- @-@include('./nav.html',{ title: '首页',show: 'active' }) -->