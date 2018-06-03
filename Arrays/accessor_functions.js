/* Searching for a value in Array with accessor functions */



// searching for first occurance of value. 

var names = ["john", "mike", "johnson", "hajris", "ali"];

putstr("Enter a name here: ");
var name = readline();

var pos = names.indexOf(name);
if(pos >= 0) {
	print(name + " found at this position " + pos + ".");
} else {
	print("Unfortunately " + name + " was not found.");
}




// searching for first and last occurance of value.

var names = ["john", "hajris", "mike", "johnson", "hajris", "ali"];

putstr("Enter a name here: ");
var name = readline();

var pos = names.indexOf(name); // first position
if(pos >= 0) {
	print(name + " first position " + pos + ".");
} 

var pos2 = names.lastIndexOf(name); // last position
if(pos2 >= 0)  {
	print(name + " last position " + pos2 + ".");
} else {
	print("Unfortunately " + name + " was not found.");
}



// Creating an array from an existent array.

// Using concat Function:
// Merging arr1 with arr2 

var arr1 = ["john", "mike", "johnson", "hajris", "ali"];
var arr2 = ["carlie", "manson", "mia"]
var concat = arr1.concat(arr2); //arr1 appears first;
print(concat);


var arr1 = ["john", "mike", "johnson", "hajris", "ali"];
var arr2 = ["carlie", "manson", "mia"]
var concat = arr2.concat(arr1);  // arr2 appears first;
print(concat);




// Splice Funtion

var arr = ["john", "mike", "johnson", "hajris", "ali", "salah"];
var spliced = arr1.splice(3,3); // at index 3, 3 names are extracted into a new array
print(spliced); // new array displays "hajris", "ali", "salah"


