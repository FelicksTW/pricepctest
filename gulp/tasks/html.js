// Подключение плагинов для HTML
import fileInclude from "gulp-file-include" // Подключение компонентов к итоговому файлу html
import webpHtmlNosvg from "gulp-webp-html-nosvg"; // Подключение копии картинки в формате webp
import versionNumber from "gulp-version-number"; // Фикс бага с кэшированием
import htmlPrettify from "gulp-html-prettify"; // Оптимизация внешнего вида кода html
import cleanHtml from "gulp-htmlclean"; // Сжатие html файла
// Настройки функций плагинов
export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "HTML",
                message: "Error: <%= error.message %>"
            }))
        )
        .pipe(fileInclude())
        .pipe(app.plugins.replace(/@img\//g, "images/"))
        .pipe(
            app.plugins.if(
                app.isBuild,
                app.plugins.if(
                    app.isWebP,
                    webpHtmlNosvg()
                )
            )
        )
        .pipe(versionNumber({
            "value": "%DT%",
            "replaces": [
                "#{VERSION_REPLACE}#",
                [/#{VERSION_REPLACE}#/g, "%TS%"]
            ],
            "append": {
                "key": "_v",
                "cover": 0,
                "to": ["css", "js",]
            },
            "output": {
                "file": "gulp/version.json"
            }
        }))
        .pipe(
            app.plugins.if(
                app.isBuild,
                htmlPrettify({
                    indent_char: " ",
                    indent_size: 1
                })))
        .pipe(
            app.plugins.if(
                app.isBuild,
                app.gulp.dest(app.path.build.html)) // РАСКОММЕНТИРОВАТЬ если нужен НЕ СЖАТЫЙ дубликат ФАЙЛА HTML
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                cleanHtml()))
        .pipe(
            app.plugins.if(
                app.isBuild,
                app.plugins.rename({
                    extname: ".min.html"
                })))
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream());
}
