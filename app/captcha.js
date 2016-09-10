"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var Operand = (function () {
    function Operand(n) {
        this.n = n;
    }
    Operand.prototype.toText = function () { return ''; };
    ;
    return Operand;
}());
var TextOperand = (function (_super) {
    __extends(TextOperand, _super);
    function TextOperand(n) {
        //super has to upper line in constructor
        _super.call(this, n);
        this.numberWord = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eigth', 'Nine'];
    }
    TextOperand.prototype.toText = function () {
        return this.numberWord[this.n];
    };
    return TextOperand;
}(Operand));
var NumberOperand = (function (_super) {
    __extends(NumberOperand, _super);
    function NumberOperand(n) {
        //super has to upper line in constructor
        _super.call(this, n);
    }
    NumberOperand.prototype.toText = function () {
        return this.n.toString();
    };
    return NumberOperand;
}(Operand));
