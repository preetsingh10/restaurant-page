/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home_page */ \"./src/modules/home_page.js\");\n/* harmony import */ var _modules_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/about */ \"./src/modules/about.js\");\n/* harmony import */ var _modules_menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu_page */ \"./src/modules/menu_page.js\");\n\n\n \n\n\nconst homeBttn = document.getElementById('home')\nconst menuBttn = document.getElementById('menu')\nconst aboutBttn = document.getElementById('about')\n\n;(0,_modules_home_page__WEBPACK_IMPORTED_MODULE_0__.homePage)()\n\nhomeBttn.addEventListener('click',()=>{\n    ;(0,_modules_home_page__WEBPACK_IMPORTED_MODULE_0__.homePage)()\n})\nmenuBttn.addEventListener('click',()=>{\n    ;(0,_modules_menu_page__WEBPACK_IMPORTED_MODULE_2__.menuPage)()\n})\naboutBttn.addEventListener('click',()=>{\n    ;(0,_modules_about__WEBPACK_IMPORTED_MODULE_1__.aboutPage)()\n})\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutPage: () => (/* binding */ aboutPage)\n/* harmony export */ });\nfunction aboutPage() {\n  const div = document.getElementById(\"content\");\n    div.innerHTML = ' '\n  const heading = document.createElement(\"h1\");\n  heading.textContent = \"About Us\";\n\n  const discription = document.createElement(\"p\");\n  discription.textContent = `Welcome to Food Fanatic, where our passion for exceptional cuisine meets an inviting atmosphere! Located in the heart of [Location], we are dedicated to providing you with an unforgettable dining experience that celebrates the rich and diverse flavors of [Cuisine Type].\n\nAt Food Fanatic, we believe that every meal should be a delightful journey. Our talented chefs, led by [Chef’s Name], are committed to using only the freshest, locally-sourced ingredients to craft mouthwatering dishes that truly reflect the essence of [Cuisine Type]. From classic favorites to innovative creations, our menu is thoughtfully designed to tantalize your taste buds and leave you craving more.\n\nBut we’re not just about the food. Our warm and stylish interior creates the perfect backdrop for any occasion, whether you’re enjoying a casual dinner with friends or celebrating a special moment with loved ones. Our friendly and attentive staff are always here to ensure you feel welcomed and cared for throughout your visit.\n\nAt Food Fanatic, we are passionate about more than just great food. We love to engage with our community, hosting events, tastings, and culinary workshops to share our enthusiasm for [Cuisine Type] cuisine.\n\nJoin us for a meal and embark on a culinary adventure that will awaken your senses and create lasting memories. We can’t wait to serve you!\n\nVisit us at [Restaurant Address] or make a reservation online at [Website URL]. Don’t forget to follow us on [Social Media Links] for the latest updates and special offers!\n\nFeel free to fill in the placeholders with specific details about your restaurant, such as location, cuisine type, and any special events you host!`;\n\n\ndiv.appendChild(heading)\ndiv.appendChild(discription)\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/about.js?");

/***/ }),

/***/ "./src/modules/home_page.js":
/*!**********************************!*\
  !*** ./src/modules/home_page.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homePage: () => (/* binding */ homePage)\n/* harmony export */ });\nfunction homePage(){\n    const div = document.getElementById(\"content\");\n    div.innerHTML = ' '\n\n     const heading = document.createElement(\"h1\");\n    heading.textContent = \"Food Fanatic\";\n    \n     const discription = document.createElement(\"p\");\n    discription.textContent = ` Welcome to Food Fanatic At Food Fanatic, we celebrate the joy of culinary exploration! Our restaurant offers a vibrant menu filled with mouthwatering dishes crafted from the freshest ingredients. From hearty comfort food to innovative gourmet creations, every plate is a testament to our passion for flavor and quality.\n    Join us for an unforgettable dining experience where every meal tells a story. Whether you’re here for a casual lunch, a special dinner, or a celebration with friends and family, our warm ambiance and attentive service will make you feel right at home. Indulge your taste buds and discover why we’re the go-to destination for food lovers in the heart of the city.\n    Come dine with us and embark on a delicious journey!`;\n    \n     const openingHours = document.createElement('p')\n    openingHours.textContent = `Hours\n    Sunday: 8am - 8pm\n    Monday: 6am - 6pm\n    Tuesday: 6am - 6pm\n    Wednesday: 6am - 6pm\n    Thursday: 6am - 10pm\n    Friday: 6am - 10pm\n    Saturday: 8am - 10pm`\n    \n     const location = document.createElement('p')\n    location.textContent = `Location:\n    123 Sunnyholt Road, blacktown, Sydney`\n    \n    div.appendChild(heading)\n    div.appendChild(discription)\n    div.appendChild(openingHours)\n    div.appendChild(location)\n}\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home_page.js?");

/***/ }),

/***/ "./src/modules/menu_page.js":
/*!**********************************!*\
  !*** ./src/modules/menu_page.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuPage: () => (/* binding */ menuPage)\n/* harmony export */ });\nfunction menuPage(){\n\n    const div = document.getElementById(\"content\");\n    div.innerHTML = ' '\n\n    const appetizers = document.createElement(\"h1\");\n   appetizers.textContent = \"Appetizers\";\n   \n    const appetizersList = document.createElement(\"ul\");\n    const appetizersListItem1 = document.createElement('li')\n    const appetizersListItem2 = document.createElement('li')\n    const appetizersListItem3 = document.createElement('li')\n    appetizersListItem1.textContent = `Bruschetta - Grilled bread topped with fresh tomatoes, basil, garlic, and balsamic glaze.`\n   appetizersListItem2.textContent = `Calamari Fritti - Crispy fried calamari served with marinara sauce.`\n   appetizersListItem3.textContent = `Stuffed Mushrooms - Mushrooms stuffed with cheese, herbs, and breadcrumbs, baked to perfection.`\n\t\n   const mainCourse = document.createElement(\"h1\");\n   mainCourse.textContent = \"Main Course\";\n    \n   const mainCourseList = document.createElement(\"ul\");\n   const mainCourseList1 = document.createElement('li')\n   const mainCourseList2 = document.createElement('li')\n   const mainCourseList3 = document.createElement('li')\n   mainCourseList1.textContent = `Grilled Salmon - Served with a lemon-dill sauce and seasonal vegetables.`\n  mainCourseList2.textContent = `Pasta Primavera - Penne pasta tossed with seasonal vegetables in a light olive oil sauce.`\n  mainCourseList3.textContent = `Chicken Parmesan - Breaded chicken breast topped with marinara sauce and melted mozzarella cheese.`\n\n\n   \n\n   div.appendChild(appetizers)\n   div.appendChild(appetizersList)\n   appetizersList.appendChild(appetizersListItem1)\n   appetizersList.appendChild(appetizersListItem2)\n   appetizersList.appendChild(appetizersListItem3)\n   div.appendChild(mainCourse)\n   div.appendChild(mainCourseList)\n   mainCourseList.appendChild(mainCourseList1)\n   mainCourseList.appendChild(mainCourseList2)\n   mainCourseList.appendChild(mainCourseList3)\n    \n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu_page.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;