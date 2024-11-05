/* Настройка функции переноса файлов в папку с результатом */
export const copy = () => {
    return app.gulp.src(app.path.src.files)
        .pipe(app.gulp.dest(app.path.build.files))
}