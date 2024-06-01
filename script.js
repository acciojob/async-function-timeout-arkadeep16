//your JS code here. If required.
const text = document.getElementById("text");
const delay = document.getElementById("delay");
const btn = document.getElementById("btn");

btn.addEventListener("click", (event) => {
	event.preventDefault();
	textVal = text.value;
	delayVal = delay.value;
	console.log(textVal,delayVal);
})