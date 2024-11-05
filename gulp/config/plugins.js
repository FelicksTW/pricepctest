// Подключение общих плагинов
import { deleteAsync } from "del"; // Удаление чего либо
import rename from "gulp-rename"; // Переименование файлов
import replace from "gulp-replace"; // Поиск и замена записи
import plumber from "gulp-plumber"; // Обработка ошибок галпом
import notify from "gulp-notify"; // Уведомления и точные Сообщения об ошибках
import browsersync from "browser-sync"; // Локальный сервер
import newer from "gulp-newer"; // Проверка наличия обновления изображений
import ifPlugin from "gulp-if"; // При определённом условии выполняется определённый код


// Экспорт плагинов
export const plugins = {
    delete: deleteAsync,
    rename: rename, 
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin
}