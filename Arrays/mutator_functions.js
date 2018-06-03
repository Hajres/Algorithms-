
/* Mutator Functions */


// Adding elements to an array.
// method one, the push Function

var array = [1, 2, 3, 4, 5]
array.push(6); // Adds  a number to the end of the array
print(array);  // Displayes the array with a new number added


// method two, the length Function

var array = [1, 2, 3, 4, 5]
array[array.length] = 6; // Adds  a number to the end of the array
print(array);  // Displayes the array with a new number added


// adding an element to the beginning of the the array without the benifit of mutator functions 

var nums = [2, 3, 4, 5];
var newNums = 1;


for (var i = nums.length; i >= 0; i--) {
	nums[i] = nums[i-1]; 
}

nums[0] = newNums
print(nums);


//adding an element to the beginning with the mutator functions 

var nums = [3, 4, 5];
nums.unshift(newNums, 2); // adding multiple number with unshift method
print(nums);



// Removing an element from an array

var nums = [1,2,3,4,5,10];
nums.pop();
print(nums);

for (var i = 0; i < nums.length; i++) {
	nums[i] = nums[i+1];
}
print(nums);

var nums = [6,1,2,3,4,5];

var first = nums.shift();
nums.push(first);
print(nums);




//Adding and Removing Elements from the Middle of an Array with splice method

// adding
var nums = [1,2,3,7,8];
var newNums = [4,5,6]
nums.splice(3, 0, newNums);
print(nums);

var nums = [1,2,3,7,8]; 
nums.splice(3,0,4,5,6); 
print(nums);

//removing

var nums = [1,2,3,10,11,12,4,5,6,7,8]; 
nums.splice(3,3);
print(nums);



// sorting strings 

var strings = ["john", "mike", "johnson", "hajris", "ali", "salah"];
var sort = strings.sort();
print(sort);
print(strings.reverse());


// Sorting numbers 

var nums = [1,2,3,4,5,6,7,8]; 
var reverse = nums.reverse();
print(reverse);

function compare(num1, num2) {
	return num1 - num2;
}
print(nums.sort(compare));





// Iterator Functions that perform opperations on array.

//ForEach: runs a function on every element on the array


function square(num) {
	return print(num, num * num);
}
var nums = [1, 2, 3, 4, 5, 6];
nums.forEach(square);  // displays 1 1, 2 4, 3 9, 4 16, 5 25, 6 36 



// Every; applies a Boolean function to an array

var nums = [1, 2, 3, 4, 5, 6];
function isEven(num) {
	return num % 2 == 0 ;
}

var even = nums.every(isEven)
if (even) {
	print("all number are even");
} else {
	print("Not all numbers are even") // displays not all numbers are even
}


var nums = [2, 6, 4, 8, 10];
var even = nums.every(isEven)
if (even) {
	print("all number are even"); // displays all number are even
} else {
	print("Not all numbers are even") 
}



// Some: returns true if some number are even

var nums = [2, 9, 4, 17, 10];
function isEven(num) {
	return num % 2 == 0 ;
}
var someEven = nums.some(isEven);
if(someEven) {
	print("Some numbers are even");
} else {
	print("No numbers are even");
}


 /*Reduce: pplies a function to an accumulator and the successive elements 
of an array until the end of the array is reached, yielding a single value */

var nums = [2, 9, 4, 17, 10];
function add(accumulator, currentValue) {
	return accumulator + currentValue;
}
var total = nums.reduce(add);
print(total); // displays 42;



// Reduce on a string 

function concat(accumulatedString, item) {
	return accumulatedString + item;
}
var words = ["hello ", "every ", "body", "! "];
var sentence = words.reduce(concat);
print(sentence); // hello every body! 

var rightReduce = words.reduceRight(concat); // displays ! bodyevery hello 
print(rightReduce);





 //Iterator Functions that return a new array

// Map function 

function curve(grade) {
	return grade += 5;
}
var grades = [44,77, 65, 63, 79]

var newGrades = grades.map(curve);
print(newGrades);



function first(word) {
	return word[0];
}
var words = ["hello", "every", "body", "!"];
var acronym = words.map(first);
print(acronym.join(""));




 // Filter function 

function isEven(num) {
	return num % 2 == 0 ;
}

function isOdd(num) {
	return num % 2 != 0 ;
}

var nums = [];
for (var i = 0; i < 20; i++) {
	nums[i] = i+1;
}
var evenNumbers = nums.filter(isEven);
print("Even numbers: " + evenNumbers); // displays 2,4,6,8,10,12,14,16,18,20

var oddNumbers = nums.filter(isOdd);
print("Even odds: " + oddNumbers);  // displays 1,3,5,7,9,11,13,15,17,19





function passingGrades(num) {
	return num >= 60;
}

var grades = [];
for (var i = 0; i < 20; i++) {
	grades[i] = Math.floor(Math.random() * 101);
}

print("All grades: " + grades);
var passGrades = grades.filter(passingGrades);
print("Passing grades: " + passGrades);



function afterc(str) {
	if (str.indexOf("cie") > -1) {
	return true; 
	} else {
	return false; 
	}
}
var words = ["recieve","deceive","percieve","deceit","concieve"]; 
var misspelled = words.filter(afterc);
print(misspelled); // displays recieve,percieve,concieve



