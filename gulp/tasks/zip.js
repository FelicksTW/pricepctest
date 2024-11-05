// Подключение плагинов для создания ZIP архива
import zipPlugin from "gulp-zip"; // Создание zip архива

// Настройки функций плагинов
export const zip = () => {
    app.plugins.delete(`./${app.path.rootFolder}.zip`);
    return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "ZIP",
                message: "Error: <%= error.message %>"
            }))
        )
        .pipe(zipPlugin(`${app.path.rootFolder}.zip`))
        .pipe(app.gulp.dest("./"));
}