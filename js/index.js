var trigger = document.querySelector("#trigger");

document.querySelector("#addHello").onclick = function() {
	trigger.onclick = function() {
		console.log("onclick: hello");
	}
}

document.querySelector("#addHi").onclick = function() {
	trigger.onclick = function() {
		console.log("onclick: hi");
	}
}

var hello1 = function() {
	console.log("addEventListener: hello1");
}

var hi1 = function() {
	console.log("addEventListener: hi1");
}

document.querySelector("#addHello1").addEventListener("click", function() {
	// trigger.addEventListener("click", function() {
	// 	console.log("addEventListener: hello1");
	// });
	trigger.addEventListener("click", hello1);
});

document.querySelector("#addHi1").addEventListener("click", function() {
	// trigger.addEventListener("click", function() {
	// 	console.log("addEventListener: hi1");
	// });
	trigger.addEventListener("click", hi1);
});