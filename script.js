const cat_from = document.querySelector("#cat_from");
const dog_form = document.querySelector("#dog_form");
const parrot_form = document.querySelector("#parrot_form");
const cat_button = document.querySelector("#cat");
const dog_button = document.querySelector("#dog");
const parrot_button = document.querySelector("#parrot");



cat_button.onclick = function() {
	let response = fetch("https://sf-pyw.mosyag.in/sse/vote/cats", {method: "POST"});
	console.log(" voit for cat");
	result()
	
}


dog_button.onclick = function() {
	let response = fetch("https://sf-pyw.mosyag.in/sse/vote/dogs", {method: "POST"});
	console.log(" voit for dog");
	result()
	
	
}

parrot_button.onclick = function() {
	let response = fetch("https://sf-pyw.mosyag.in/sse/vote/parrots", {method: "POST"});
	console.log(" voit for parrot");
	result()
}

function result(){
	location.href = "result.html"
} 

