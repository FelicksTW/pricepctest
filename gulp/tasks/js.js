// Подключение плагинов для JS
import webpack from "webpack-stream"; // Webpack
import webPackConfig from '../../webpack/webpack.config.js';
// Настройки функций плагинов
export const js = () => {
    return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "JS",
                message: "Error: <%= error.message %>"
            }))
        )
        .pipe(
            webpack({
                config: webPackConfig
            }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream());
}