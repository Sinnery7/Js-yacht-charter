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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_changeModalState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/changeModalState */ "./src/js/modules/changeModalState.js");

window.addEventListener('DOMContentLoaded', () => {
  "use strict";

  let modalState = {};
  Object(_modules_changeModalState__WEBPACK_IMPORTED_MODULE_0__["default"])(modalState);
});

/***/ }),

/***/ "./src/js/modules/calcPrice.js":
/*!*************************************!*\
  !*** ./src/js/modules/calcPrice.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const calcPrice = state => {
  const priceResult = document.querySelector('.feed-form__value'),
        mainCost = [
  /*3 часа*/
  [22500, 30000, 40000],
  /*5 часов*/
  [35000, 45000, 50000],
  /*1 день*/
  [45000, 55000, 65000],
  /*1-2 дня*/
  [83700, 102300, 120900],
  /*2-3 дня*/
  [121500, 148500, 175500],
  /*индивидуальный тур*/
  [153000, 187000, 221000]],
        otherCost = [4500, 4500, 4000, 3500];
  /*доп услуги по порядку*/

  function mainCalc(clock, guests = 0) {
    return clock >= 0 ? mainCost[clock][guests] : 0;
  }

  function otherPriceCalc(state) {
    let result = [];

    if (state.checkbox) {
      state.checkbox.forEach(item => {
        result.push(otherCost[item]);
      });
    }

    return result.reduce((sum, current) => sum + current, 0);
  }

  function calcForm(rent = 0, rest = 0) {
    return rent + rest;
  }

  function printPrice() {
    priceResult.textContent = `${calcForm(rentYacht, otherPrice)} руб`;
  }

  const rentYacht = mainCalc(state.clock, state.guests),
        otherPrice = otherPriceCalc(state);
  printPrice();
};

/* harmony default export */ __webpack_exports__["default"] = (calcPrice);

/***/ }),

/***/ "./src/js/modules/changeModalState.js":
/*!********************************************!*\
  !*** ./src/js/modules/changeModalState.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calcPrice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcPrice */ "./src/js/modules/calcPrice.js");


const changeModalState = state => {
  const yachtClock = document.querySelectorAll('input[name="clock"]'),
        yachtGuests = document.querySelectorAll('input[name="quest"]'),
        otherServices = document.querySelectorAll('input[name="servicesCheckbox"]');

  function bindActionToElems(event, elem, prop) {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case 'INPUT':
            if (item.getAttribute('type') === 'checkbox') {
              state[prop] = [];
              elem.forEach((box, num) => {
                if (box.checked) state[prop].push(num);
              });
            } else state[prop] = state[prop] = i;

            break;
        }

        console.log(state);
        Object(_calcPrice__WEBPACK_IMPORTED_MODULE_0__["default"])(state);
      });
    });
  }

  bindActionToElems('click', yachtClock, 'clock');
  /*получаем количество часов аренды*/

  bindActionToElems('click', yachtGuests, 'guests');
  /*получаем количество гостей*/

  bindActionToElems('click', otherServices, 'checkbox');
  /*получаем доп услуги из отмеченых чекбоксов*/
};

/* harmony default export */ __webpack_exports__["default"] = (changeModalState);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map