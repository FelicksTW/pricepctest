/* Маски для полів (у роботі) */

// Підключення функціоналу
// Підключення списку активних модулів
import { fdModules } from "../../modules/modules.js";

// Підключення модуля
import "inputmask/dist/inputmask.min.js";

const inputMasks = document.querySelectorAll('input');
if (inputMasks.length) {
	fdModules.inputmask = Inputmask().mask(inputMasks);
}