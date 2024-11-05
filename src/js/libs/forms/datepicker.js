/* Календар */

// Підключення функціоналу
// Підключення списку активних модулів
import { fdModules } from "../../modules/modules.js";

// Підключення модуля
import datepicker from 'js-datepicker';

if (document.querySelector('[data-datepicker]')) {
	const picker = datepicker('[data-datepicker]', {
		customDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"],
		customMonths: ["Січ", "Лют", "Берез", "Квіт", "Трав", "Черв", "Лип", "Серп", "Верес", "Жовт", "Листоп", "Груд"],
		overlayButton: 'Застосувати',
		overlayPlaceholder: 'Рік (4 цифри)',
		startDay: 1,
		formatter: (input, date, instance) => {
			const value = date.toLocaleDateString()
			input.value = value
		},
		onSelect: function (input, instance, date) {

		}
	});
	fdModules.datepicker = picker;
}
