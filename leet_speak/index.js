var leet = {
	"level_1" : {
		"a":"4", "b":"8", "e":"3", "g":"6", "i":"1", "l":"1", "o":"0", "r":"2", "s":"5", "t":"7", "z":"2"
	},
	"level_2" : {
		"a":"4", "b":"8", "c":"(", "d":"[)", "e":"3", "f":"|=", "g":"6", "h":"|-|", "i":"1", "j":"_|", "k":"X", "l":"1", "m":"|\\/|", "n":"|\\|", "o":"0", "p":"|*", "q":"(_,)", "r":"2", "s":"5", "t":"7", "u":"(_)", "v":"\\/", "w":"\\/\\/", "x":"><", "y":"7", "z":"2"
	},
	"level_3" : {
		"a":"/-\\", "b":"|3", "c":"(", "d":"|)", "e":"[-", "f":"|=", "g":"(_+", "h":"#", "i":"!", "j":"_|", "k":"|<", "l":"|_", "m":"/\\/\\", "n":"|\\|", "o":"()", "p":"|>", "q":"(_,)", "r":"/2", "s":"$", "t":"¯|¯", "u":"|_|", "v":"|/", "w":"\\|/", "x":")(", "y":"j", "z":"7_"
	}
};

function convert(input, map) {
	let result = input;
	Object.keys(map).forEach(function(k){
		result = result.replaceAll(k, map[k]);
	});
	return result;
}

function process(level) {
	let doms = document.querySelectorAll(".leet");
	for (let dom of doms) {
		console.log(dom);
		dom.innerHTML = convert(dom.innerHTML.toLowerCase(), leet["level_"+level]);
	}
}

var keys_konami = [];
var konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
var keys_covid = [];
var covid = ["c", "o", "v", "i", "d"];
var keys_neo = [];
var neo = ["n", "e", "o"];

document.addEventListener("keydown", event => {
	let key_value = event.key.toLowerCase();
	if (key_value == konami[keys_konami.length]) {
		keys_konami.push(key_value);
	} else {
		keys_konami = [];
	}
	if (key_value == covid[keys_covid.length]) {
		keys_covid.push(key_value);
	} else {
		keys_covid = [];
	}
	if(key_value == neo[keys_neo.length]) {
		keys_neo.push(key_value);
	} else {
		keys_neo = [];
	}
	if (keys_konami.length == konami.length) {
		process(1);
		resetInput();
	}
	if (keys_covid.length == covid.length) {
		process(2);
		resetInput();
	}
	if(keys_neo.length == neo.length) {
		process(3);
		resetInput();
	}
	console.log(event.key);
	if (event.key == " ") {
		// console.log(reverse(document.getElementById("leet").innerHTML, leet["level_2"]));
		document.location.reload();
	}
});

function resetInput() {
	keys_covid = [];
	keys_konami = [];
	keys_neo = [];
}

function reverse(input, map) {
	let result = input;
	Object.keys(map).forEach(function(k){
		result = result.replaceAll(map[k], k);
	});
	return result;
}
