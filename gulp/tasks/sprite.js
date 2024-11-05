// Подключение плагинов для SVG СПРАЙТОВ
import svgSprite from "gulp-svg-sprite"; // Создание svg спрайтов

// Настройки функций плагинов
export const sprite = () => {
    return app.gulp.src(`${app.path.src.svgicons}`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SVG",
                message: "Error: <%= error.message %>"
            }))
        )
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: `../icons/icons.svg`,
                    example: true
                }
            },
        }
        ))
        .pipe(app.gulp.dest(`${app.path.build.images}`));
}