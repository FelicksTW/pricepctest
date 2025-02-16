// Подключение конфига FTP сервера
import { configFTP } from "../config/ftp.js";

// Подключение плагинов для FTP сервера
import vinylFTP from "vinyl-ftp"; // Отправка файлов на ftp сервер
import util from "gulp-util"; // Отслеживание хода копирования файлов на ftp сервер

// Настройки функций плагинов
export const ftp = () => {
    configFTP.log = util.log;
    const ftpConnect = vinylFTP.create(configFTP);
    return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "FTP",
                message: "Error: <%= error.message %>"
            }))
        )
        .pipe(ftpConnect.dest(`/${app.path.ftp}/${app.path.rootFolder}`));
}