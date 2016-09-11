"use strict";
var Captcha_1 = require("./Captcha");
var submit = document.getElementById('btnSubmit');
submit.addEventListener('click', function (e) {
    e.preventDefault();
    var capt = new Captcha_1.Captcha();
    console.log(capt.generate(1, 2, 3, '+'));
});
