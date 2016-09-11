/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Captcha_1 = __webpack_require__(1);
	var submit = document.getElementById('btnSubmit');
	submit.addEventListener('click', function (e) {
	    e.preventDefault();
	    var capt = new Captcha_1.Captcha();
	    console.log(capt.generate(1, 2, 3, '+'));
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	var Captcha = (function () {
	    function Captcha() {
	    }
	    Captcha.prototype.generate = function (pattern, left, right, operator) {
	        var leftOperand;
	        var rightOperand;
	        if (pattern === 1) {
	            leftOperand = new NumberOperand(left);
	            rightOperand = new TextOperand(right);
	        }
	        else if (pattern === 2) {
	            leftOperand = new TextOperand(left);
	            rightOperand = new NumberOperand(right);
	        }
	        else {
	            throw new Error('please define pattern 1 or 2');
	        }
	        return leftOperand.toText() + " " + operator + " " + rightOperand.toText();
	    };
	    Captcha.prototype.calculateResult = function (left, right, operator) {
	        if (operator === '+') {
	            return left + right;
	        }
	        else if (operator === '-') {
	            return left - right;
	        }
	        else if (operator === '*') {
	            return left * right;
	        }
	        else {
	            throw new Error('support only operator +, - and *');
	        }
	    };
	    return Captcha;
	}());
	exports.Captcha = Captcha;
	var TextOperand = (function () {
	    function TextOperand(n) {
	        this.n = n;
	        this.numberWord = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eigth', 'Nine'];
	    }
	    TextOperand.prototype.toText = function () {
	        return this.numberWord[this.n];
	    };
	    return TextOperand;
	}());
	var NumberOperand = (function () {
	    function NumberOperand(n) {
	        this.n = n;
	    }
	    NumberOperand.prototype.toText = function () {
	        return this.n.toString();
	    };
	    return NumberOperand;
	}());
	var Operator = (function () {
	    function Operator(symbol) {
	    }
	    return Operator;
	}());


/***/ }
/******/ ]);