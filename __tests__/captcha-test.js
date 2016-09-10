"use strict";
/// <reference path="../typings/jest/jest.d.ts" />
var Captcha_1 = require('../app/Captcha');
describe("captcha", function () {
    describe('generator', function () {
        it('should return pattern 1', function () {
            var captcha = new Captcha_1.Captcha();
            expect(captcha.generate(1, 2, 3, '+')).toEqual('2 + Three');
        });
        it('should return pattern 2', function () {
            var captcha = new Captcha_1.Captcha();
            expect(captcha.generate(2, 2, 3, '-')).toEqual('Two - 3');
        });
        it('should correct calculator operator +', function () {
            var captcha = new Captcha_1.Captcha();
            expect(captcha.calculateResult(1, 2, '+')).toEqual(3);
        });
        it('should correct calculator operator -', function () {
            var captcha = new Captcha_1.Captcha();
            expect(captcha.calculateResult(1, 2, '-')).toEqual(-1);
        });
        it('should correct calculator operator *', function () {
            var captcha = new Captcha_1.Captcha();
            expect(captcha.calculateResult(1, 2, '*')).toEqual(2);
        });
        it('should throw and error when input operator /', function () {
            var captcha = new Captcha_1.Captcha();
            expect(function () { captcha.calculateResult(1, 2, '/'); })
                .toThrow(new Error('support only operator +, - and *'));
        });
        it('should throw and error when input upsupport pattern', function () {
            var captcha = new Captcha_1.Captcha();
            expect(function () { captcha.generate(3, 2, 3, '+'); })
                .toThrow(new Error('please define pattern 1 or 2'));
        });
    });
});
