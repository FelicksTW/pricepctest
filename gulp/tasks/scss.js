// Подключение плагинов для SCSS
import * as dartSass from "sass"; // Предпроцессор sass
import gulpSass from "gulp-sass"; // Запуск предпроцессора
import autoprefixer from "gulp-autoprefixer"; // Автоматическое добавление префиксов для кроссбраузерности
import groupCssMediaQueries from "gulp-group-css-media-queries"; // Групировка медиа запросов
import webpcss from "gulp-webpcss"; // Вывод webp изображений
import cleanCss from "gulp-clean-css"; // Сжатие css файла

// Свзязь плагинов sass и gulp-sass
const sass = gulpSass(dartSass);

// Настройки функций плагинов
export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SCSS",
                message: "Error: <%= error.message %>"
            })))
        .pipe(app.plugins.replace(/@img\//g, "../images/"))
        .pipe(sass({
            outputStyle: "expanded"
        }))
        .pipe(
            app.plugins.if(
                app.isBuild,
                groupCssMediaQueries()
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                autoprefixer({
                    grid: true,
                    overideBrowserslist: ["last 3 versions"],
                    cascade: true
                })
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                app.plugins.if(
                    app.isWebP,
                    webpcss(
                        {
                            webpClass: ".webp",
                            noWebpClass: ".no-webp"
                        }
                    )
                )
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                app.gulp.dest(app.path.build.css)) // РАСКОММЕНТИРОВАТЬ если нужен НЕ СЖАТЫЙ дубликат ФАЙЛА СТИЛЕЙ
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                cleanCss()))
        .pipe(app.plugins.rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream());
}