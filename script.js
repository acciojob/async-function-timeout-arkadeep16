//your JS code here. If required.
const text = document.getElementById("text");
const delay = document.getElementById("delay");
const btn = document.getElementById("btn");

btn.addEventListener("click", (event) => {
	event.preventDefault();
	textVal = text.value;
	delayVal = delay.value;
	console.log(textVal,delayVal);

	async function handlePromise(textVal, delayVal) {
		const myPromise = new Promise ((resolve,reject)=>{
			setTimeout(()=>{
				resolve(textVal)
			}, delayVal)
		})

		const res = await myPromise;
		document.getElementById("output").innerText = res
	}
	handlePromise(textVal, delayVal);  
})


