// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile, FLS } from "../modules/functions.js";
// Підключення списку активних модулів
import { fdModules } from "../modules/modules.js";

// Підключення з node_modules
import tippy from 'tippy.js';

// Підключення стилів з src/scss/libs
// import "../../scss/libs/tippy.scss";
// Підключення стилів з node_modules
//import 'tippy.js/dist/tippy.css';

// Запускаємо та додаємо в об'єкт модулів
fdModules.tippy = tippy('[data-tippy-content]', {

});