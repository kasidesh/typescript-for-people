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
