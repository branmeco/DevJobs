/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/app.js":
/*!**************************!*\
  !*** ./public/js/app.js ***!
  \**************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', () => {\n    const skills = document.querySelector('.lista-conocimientos');\n\n    if (skills) {\n        skills.addEventListener('click', agregarSkills);\n    }\n})\n\nconst skills = new Set();\n\nconst agregarSkills = (e) => {\n    if (e.target.tagName === 'LI') {\n        if (e.target.classList.contains('activo')) {\n            //Quitar del set y quitar la clase\n            skills.delete(e.target.textContent);\n            e.target.classList.remove('activo');\n        } else {\n            //Agregar del set y agregar la clase\n            skills.add(e.target.textContent);\n            e.target.classList.add('activo');\n        }\n    }\n\n    const skillsArray = [...skills]\n    document.querySelector('#skills').value = skillsArray;\n}\n\n//# sourceURL=webpack://devjobs/./public/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/js/app.js"]();
/******/ 	
/******/ })()
;