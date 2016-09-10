"use strict";
var Captcha = (function () {
    function Captcha() {
    }
    Captcha.prototype.generate = function (pattern, left, right, operator) {
        var leftOperand;
        var rightOperand;
        if (pattern === 1) {
            leftOperand = new NumberOperand(left).toText();
            rightOperand = new TextOperand(right).toText();
        }
        else if (pattern === 2) {
            leftOperand = new TextOperand(left).toText();
            rightOperand = new NumberOperand(right).toText();
        }
        else {
            throw new Error('please define pattern 1 or 2');
        }
        return leftOperand + " " + operator + " " + rightOperand;
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
        this.numberWord = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eigth', 'Nine'];
        this.n = n;
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
