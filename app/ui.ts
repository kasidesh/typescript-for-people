import { Captcha } from "./Captcha";

var submit = document.getElementById('btnSubmit');
var paragraph1 = document.getElementById('pResult');

submit.addEventListener('click', function (e) {
    e.preventDefault();
    var capt = new Captcha();
    console.log(capt.generate(1,2,3,'+'));    
});