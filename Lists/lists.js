function List() {
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = []; // initializes an empty array to store list elements
	// this.clear = clear;
	this.find = find;
	this.toString = toString; 
	// this.insert = insert; 
	this.append = append; 
	this.remove = remove;
	this.length = length;
	this.front = front;
	this.end = end;
	this.prev = prev;
	this.next = next; 
	this.currPos = currPos; 
	this.moveTo = moveTo; 
	this.getElement = getElement; 
	this.contains = contains;
}


function append(element) {
	this.dataStore[this.listSize++] = element;
}

function find(element) {
	for (var i = 0; i < this.dataStore.length; ++i) {
		if (this.dataStore[i] == element) {
	   	 return i;
		} 
		return -1; 
	}
}


function remove(element) {
	var foundAt = this.find(element); 
	if (foundAt > -1) {
		this.dataStore.splice(foundAt,1);
		 --this.listSize;
		return true;
	}
		return false; 
}


function length() { 
	return this.listSize;
}

function toString() {
	return this.dataStore;
}


function contains(element) {
	for (var i = 0; i < this.dataStore.length; ++i) {
		if (this.dataStore[i] == element) { return true;
		} 
	}
	return false; 
}


function front() { 
	this.pos = 0;
}

function end() {
this.pos = this.listSize-1;
}

function prev() {
	if (this.pos > 0) {
		--this.pos; 
	}
}

function next() {
	if (this.pos < this.listSize-1) {
		++this.pos; 
	}
}

function currPos() { 
	return this.pos;
}

function moveTo(position) { 
	this.pos = position;
}

function getElement() {
	return this.dataStore[this.pos];
}

var names = new List(); 
names.append("Hajris");
names.append("James");
names.append("Ahmed");
names.append("Marwan");


for(names.front(); names.currPos() <= names.length(); names.next()) { 
	print(names.toString());
}
for(names.end(); names.currPos() >= 0; names.prev()) { 
	print(names.getElement());
}


