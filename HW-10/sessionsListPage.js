let dataLS = JSON.parse(localStorage.getItem("sessionsList"));

for (let data of dataLS) {
	let p = document.createElement("p");
	p.innerText = data;
	document.body.appendChild(p);
}