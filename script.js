//your JS code here. If required.
let promise = new Promise((resolve,reject) => {
	setTimeout(()=>{
		resolve(`hello, world!`);
	},1000)
})

promise.then((message)=> {
	document.getElementById('output').innerText = message;
})


