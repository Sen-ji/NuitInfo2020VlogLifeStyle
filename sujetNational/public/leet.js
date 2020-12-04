var leet = {
	"level_1" : {
		"a":"4", "b":"8", "e":"3", "g":"6", "i":"1", "l":"£", "o":"0", "r":"2", "s":"5", "t":"7"
	},
	"level_2" : {
		"a":"4", "u":"(_)", "b":"8", "c":"(", "d":"[)", "e":"3", "f":"|=", "g":"6", "h":"|-|", "i":"1", "j":"_|", "k":"|{", "l":"£", "m":"|\\/|", "n":"|\\|", "o":"0", "p":"|*", "q":"(_,)", "r":"2", "s":"5", "t":"+", "v":"\\/", "w":"\\/\\/", "x":"><", "z":"7_", "y":"7"
	},
	"level_3" : {
		"k":"|\\\“", "a":"/-\\", "n":"|\\|", "g":"(_+", "q":"(_,)", "o":"()", "u":"(_)", "x":")(", "b":"|3", "c":"(", "d":"|)", "e":"[-", "f":"|=", "h":"#", "i":"!", "l":"|_", "j":"_|", "m":"/\\/\\", "p":"|°", "r":"/2", "s":"$", "t":"¯|¯", "w":"\\|/", "v":"|/", "z":"7_", "y":"¥"
	}
};

function convert(input, map) {
	let result = input;
	Object.keys(map).forEach(function(k){
		result = result.replaceAll(k, map[k]);
	});
	return result;
}

function reverse(input, map) {
	let result = input;
	Object.keys(map).forEach(function(k){
		result = result.replaceAll(map[k], k);
	});
	return result;
}

function processBack() {
	let doms = document.querySelectorAll(".leet");
	for(let dom of doms) {
		//console.log(dom);
		dom.innerHTML = reverse(dom.innerHTML.toLowerCase(), leet["level_" + level]);
	}
}

function process() {
	if(level > 0) {
		let doms = document.querySelectorAll(".leet");
		for (let dom of doms) {
			//console.log(dom);
			dom.innerHTML = convert(dom.innerHTML.toLowerCase(), leet["level_"+level]);
		}
	}
}

var level = localStorage.getItem('level') || 0;
var keys_konami = [];
var konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
var keys_covid = [];
var covid = ["c", "o", "v", "i", "d"];
var keys_neo = [];
var neo = ["n", "e", "o"];

document.addEventListener("keydown", event => {
	let update_level = false;
	let key_value = event.key.toLowerCase();
	if (key_value == konami[keys_konami.length].toLowerCase()) {
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
		if(level == 0) {
			level = 1;
			process();
			update_level = true;
		}
		resetInput();
	}
	if (keys_covid.length == covid.length) {
		if(level > 0) {
			processBack();
			level = 0;
			update_level = true;
		}
		resetInput();
	}
	if(keys_neo.length == neo.length) {
		if(level > 0 && level < 3) {
			processBack();
			level = Number(level) + 1;
			process();
			update_level = true;
		}
		resetInput();
	}
	if(update_level) {
		localStorage.setItem('level', level);
		console.log("level = " + level);
	}
	//console.log(event.key);
});

function resetInput() {
	keys_covid = [];
	keys_konami = [];
	keys_neo = [];
};
