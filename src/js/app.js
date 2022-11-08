import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

import * as select from './modules/select.js';
import * as select2 from './modules/select2.js';
import * as burger from './modules/burgerMenu.js';
import Swiper from "swiper/bundle";

const swiper = new Swiper('.swiper', {
	pagination: {
		el: ".swiper-pagination",
		type: "progressbar",
	},
	navigation: {
		nextEl: ".slider__next",
		prevEl: ".slider__prev",
	},
	slidesPerView: 1.175,
});
