
function Queue() {
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.fornt = fornt;
	this.back = back;
	this.empty = empty;
	this.toString = toString;
}

function enqueue(element) {
	this.dataStore.push(element);
}

function dequeue() {
	this.dataStore.shift();
}

function front() {
	return this.dataStore[0];
}

function back() {
	this.dataStore[this.dataStore-1];
}

function empty() {
	if (this.dataStore.lenght = 0) {
		return true;
	} else {
		return false;
	}
}

function toString() {
	var retStr = "";
	for (var i = 0; i < this.dataStore.length; i++) {
		retStr += this.dataStore[i] + "/n";
	}
	return retStr;
}

function Dancer(name, sex) {
	this.name = name;
	this.sex = sex;
}

function getDancer(males, females) {
	var names = readline("dancers.txt").split("/n");
	for (var i = 0; i < names.length; i++) {
		names[i] = names[i].trim();
	}

	for (var i = 0; i < names.length; i++) {
		var dancer = names[i].split(" ");
		if(dancer == "F") {
			females.enqueue(new Dancer(name, sex));
		}
		else {
			males.enqueue(new Dancer(name, sex));
		}
	}
}

var book = { 
  name: 'Learning JavaScript DataStructures and Algorithms' 
}; 
var concat = 'You are reading ' + book.name + '.,\n    and this is a new line\n    and so is this.';
print(concat.trim());
