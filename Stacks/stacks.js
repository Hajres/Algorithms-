function Stack() {
	this.dataStore = [];
	this.top = 0;
	this.peek = peek;
	this.push = push;
	this.pop = pop;
	this.clear = clear;
	this.length = lenght;
}

function peek() {
	return this.dataStore[this.top-1];
}

function push(element) {
	this.dataStore[this.top++] = element;
}

function pop() {
	return this.dataStore[--this.top];
}

function clear() {
	this.top = 0;
}

function lenght() {
	return this.top;
}

var s = new Stack() 
	s.push("Ahmed");
	s.push("Hajris");
	s.push("Bryan");
	print(s.length());
	print(s.peek());
	s.clear();
	print(s.peek());
	print(s.length());
	
	

function isPalindrome(word) {
	var s = new Stack();
	for (var i = 0; i < word.length; ++i) {
	      s.push(word[i]);
	   }
	var rword = "";
	while (s.length() > 0) {
	      rword += s.pop();
	   }
	if (word == rword) { 
		return true;
	} else {
		return false;
	}
}


var word = "hello";
if (isPalindrome(word)) {
print(word + " is a palindrome.");
}
else {
print(word + " is not a palindrome.");
}



function factorial(n) { if(n===0){
return 1; }
else {
return n * factorial(n-1);
} }

print(factorial(5));


function fact(n) {
	var s = new Stack();
	 while(n>1) {
     s.push(n--);
     print(s.length());
   }
}
  fact(5);




