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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_ImagesView__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_AddImageView__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controllers_ImagesController__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controllers_AddImageController__ = __webpack_require__(5);










const imagesView = new __WEBPACK_IMPORTED_MODULE_1__views_ImagesView__["a" /* ImagesView */]();
const addImageView = new __WEBPACK_IMPORTED_MODULE_2__views_AddImageView__["a" /* AddImageView */]();
const imageModel = new __WEBPACK_IMPORTED_MODULE_0__models_Image__["a" /* Image */]();

let imagesCtrl = new __WEBPACK_IMPORTED_MODULE_3__controllers_ImagesController__["a" /* ImagesController */](imagesView, imageModel);
let addImageCtrl = new __WEBPACK_IMPORTED_MODULE_4__controllers_AddImageController__["a" /* AddImageController */](addImageView, imageModel);

imagesCtrl.start();
addImageCtrl.start();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Image {

    constructor(link) {
        this.link = link;
        this.images = JSON.parse(localStorage.getItem('images')) || [];
    }

    addImage(data, cb) {
        this.images.push(data);
        localStorage.setItem('images', JSON.stringify(this.images));
        cb(true);
    }

    getImages() {
        return this.images;
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Image;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ImagesView {

    render(images) {
        let block = document.getElementById('imagesView');
        let templateString = '';

        for (let item of images) {
            templateString += `<li>${item.link}</li>`;
        }

        block.innerHTML = templateString;
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = ImagesView;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class AddImageView {

    render() {
        let self = this;

        let addImageView = document.getElementById('addImage');

        addImageView.innerHTML = `
            <input type="text" placeholder="link to image" id="addImageInput">
            <button id="addImageButton">Add</button>
        `;
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = AddImageView;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ImagesController {

    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    start() {
        let images = this.model.getImages();
        this.update(images);
    }

    getImages() {
        return this.model.getImages();
    }

    update(images) {
        this.view.render(images);
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = ImagesController;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class AddImageController {

    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    start() {
        let self = this;
        self.view.render();

        let button = document.getElementById('addImageButton');

        button.addEventListener('click', function () {
            let input = document.getElementById('addImageInput');
            self.add(input.value);
        });
    }

    add(data) {
        data = { link: data };
        this.model.addImage(data);
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = AddImageController;


/***/ })
/******/ ]);