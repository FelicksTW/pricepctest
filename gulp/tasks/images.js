// Подключение плагинов для КАРТИНОК
import imagemin from "gulp-imagemin"; // Сжатия изображения
import webp from "gulp-webp"; // Создание webp изображений

// Настройки функций плагинов
export const images = () => {
    return app.gulp.src(app.path.src.images)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "IMAGES",
                message: "Error: <%= error.message %>"
            }))
        )
        .pipe(app.plugins.newer(app.path.build.images))
        .pipe(
            app.plugins.if(
                app.isBuild,
                app.plugins.if(
                    app.isWebP,
                    webp()
                )
            )
        )
        .pipe(
            app.plugins.if(
                app.isWebP,
                app.gulp.dest(app.path.build.images)
            )
        )
        .pipe(
            app.plugins.if(
                app.isWebP,
                app.gulp.src(app.path.src.images)
            )
        )
        .pipe(
            app.plugins.if(
                app.isWebP,
                app.plugins.newer(app.path.build.images)
            )
        )
        .pipe(imagemin({
            progresive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true,
            optimizationLevel: 0 // От 0 до 7 (Сжатие изображения)
        })
        )
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.gulp.src(app.path.src.svg))
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.plugins.browsersync.stream());
}