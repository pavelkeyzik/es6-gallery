var main =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_Image__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_ImagesView__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_AddImageView__ = __webpack_require__(5);






let imagesView = new __WEBPACK_IMPORTED_MODULE_1__views_ImagesView__["a" /* ImagesView */]();
let addImageView = new __WEBPACK_IMPORTED_MODULE_2__views_AddImageView__["a" /* AddImageView */]();

imagesView.render();
addImageView.render();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Image {

    constructor(link) {
        this.link = link;
    }

}
/* unused harmony export Image */


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_ImagesView__ = __webpack_require__(3);


class ImagesController {

    start() {
        var images = JSON.parse(localStorage.getItem('images'));
        let imageView = new __WEBPACK_IMPORTED_MODULE_0__views_ImagesView__["a" /* ImagesView */]();
        if (images) imageView.render(images);
    }

    getImages() {
        return JSON.parse(localStorage.getItem('images'));
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = ImagesController;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controllers_ImagesController__ = __webpack_require__(2);


class ImagesView {

    constructor() {
        this.controller = new __WEBPACK_IMPORTED_MODULE_0__controllers_ImagesController__["a" /* ImagesController */]();
    }

    render() {
        let self = this;

        let data = self.controller.getImages();

        if (data) {

            let block = document.getElementById('imagesView');
            let templateString = '';

            for (let item of data) {
                templateString += `<li>${item.link}</li>`;
            }

            block.innerHTML = templateString;
        }
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = ImagesView;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_AddImageView__ = __webpack_require__(5);


class AddImageController {

    start() {
        let imageView = new __WEBPACK_IMPORTED_MODULE_0__views_AddImageView__["a" /* AddImageView */]();
        imageView.render();
    }

    add(data) {
        let images = JSON.parse(localStorage.getItem('images'));

        data = { link: data };

        if (!images) {
            localStorage.setItem('images', JSON.stringify([data]));
            return;
        }

        images.push(data);
        localStorage.setItem('images', JSON.stringify(images));
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = AddImageController;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controllers_AddImageController__ = __webpack_require__(4);


class AddImageView {

    constructor() {
        this.controller = new __WEBPACK_IMPORTED_MODULE_0__controllers_AddImageController__["a" /* AddImageController */]();
    }

    render() {
        var self = this;

        let addImageView = document.getElementById('addImage');

        addImageView.innerHTML = `
            <input type="text" placeholder="link to image" id="addImageInput">
            <button id="addImageButton">Add</button>
        `;

        let button = document.getElementById('addImageButton');

        button.addEventListener('click', function () {
            let input = document.getElementById('addImageInput');
            self.controller.add(input.value);
        });
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = AddImageView;


/***/ })
/******/ ]);