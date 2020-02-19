var _ = require('lodash');
var array=[1,2,3,4,5,6,7,8];
console.log('answer:',  _.without(array, 3));
var css=document.querySelector("h3");
var c1=document.querySelector(".color1");
var c2=document.querySelector(".color2");
var bg=document.getElementById('bg');
function setg(){
	bg.style.background=
	"linear-gradient(to right, "
	+c1.value
	+", "
	+c2.value
	+")";
	css.textContent=bg.style.background+";"
}
c1.addEventListener("input",setg);

c2.addEventListener("input",setg);
	