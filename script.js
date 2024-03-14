//your JS code here. If required.
let level = document.getElementById('level');
const root = document.documentElement;
let count = 1;
while(level!==root){
	count ++;
	level = level.parentElement;
}
alert(`The level of the element is: ${count}`);