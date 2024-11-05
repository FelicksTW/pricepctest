// Настройки функции для удаления ненужного содержимого в папке с результатом
export const reset = () => {
    return app.plugins.delete(app.path.clean);
}