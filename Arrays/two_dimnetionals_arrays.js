// Two dimentional array.


//processing the average grades

var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
var total = 0;
var average = 0.0;

for (var row = 0; row < grades.length; row++) {
	for (var col = 0; col < grades[row].length; col++) {
		total += grades[row][col];
	}
	  average = total / grades[row].length;
	  print("Student " + parseInt(row+1) + " average: " +
             average.toFixed(2));

	   total = 0;
       average = 0.0;
}

// row-wise computation

var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]]; 
var total = 0;
var average = 0.0;
for (var col = 0; col < grades.length; ++col) {
for (var row = 0; row < grades[col].length; ++row) { total += grades[row][col];
}
       average = total / grades[col].length;
       print("Test " + parseInt(col+1) + " average: " +
             average.toFixed(2));
       total = 0;
       average
	   = 0.0;
    }


// Jagged arrays

var grades = [[89, 77],[76, 82, 81],[91, 94, 89, 99]]; var total = 0;
var average = 0.0;
for (var row = 0; row < grades.length; ++row) {
for (var col = 0; col < grades[row].length; ++col) { total += grades[row][col];
       }
       average = total / grades[row].length;
       print("Student " + parseInt(row+1) + " average: " +
             average.toFixed(2));
       total = 0;
       average = 0.0;
    }



// Array of objects


function Point(x, y) {
	this.x = x;
	this.y = y;
}

function displayPts(arry) {
	for (var i = 0; i < arry.length; i++) {
		 print(arry[i].x + " , " + arry[i].y);	
	}
}

var pt1 = new Point(5,4);
var pt2 = new Point(6,4);
var pt3 = new Point(7,4);
var pt4 = new Point(8,4);

var points = [pt1, pt2, pt3, pt4]


for (var i = 0; i < points.length; i++) {
	print("Point " + parseInt(i+1) + " : " + points[i].x + " , " + points[i].y);
}

var pt5 = new Point(9,4);
points.push(pt5);
print("After a new object has been pushed: ");
displayPts(points)
points.pop()
print("after the new object has been popped: ");
displayPts(points);



// Arrays in object


function weekTemps() { 
	this.dataStore = []; 
	this.add = add; 
	this.average = average;
	this.displayTemps = displayTemps;
}

function add(temp) {
	this.dataStore.push(temp);
}

function average() {
	var total = 0;
	for (var i = 0; i < this.dataStore.length; i++) {
		total += dataStore[i];
	}
	return  total / dataStore[i].length;
}

function displayTemps() {
	for (var i = 0; i < this.dataStore.length; i++) {
		print(this.dataStore[i])
		
	}
	
}

var thisWeek = new weekTemps()
thisWeek.add(50);
thisWeek.add(55);
thisWeek.add(59);
thisWeek.add(60);
thisWeek.add(59);
this.thisWeek.displayTemps()


function Grades() {
	this.studentGrades = [];
	this.add = add;
	this.displayGrades = displayGrades;
	this.average = average;
	this.passing = passing;
}

function add() {
	 for (var i = 0; i < 20; i++) {
	 	 this.studentGrades[i] = Math.floor(Math.random() * 101);
	 }
}


function displayGrades() {
	 print("All grades: " + this.studentGrades);
} 	

function average() {
	var average = 0.0;
	var total = 0;
	for (var i = 0; i < this.studentGrades.length; i++) {
		total += this.studentGrades[i];
	}
	return average = 
	"Student's grade average: " + total / this.studentGrades.length;
 }

 function passing(num) {
 	if( num > 64) {
 		return  num;
 	}
 }

var newGrades = new Grades() 
	newGrades.add();
	print(newGrades.average());
	print("Passing Grades: " + newGrades.studentGrades.filter(passing));
	newGrades.displayGrades();


var words = ["let's ", "join ", "these ", "words ", "forward ", "and ", "backwards "];
function concat(accumulatedString, item){
	return accumulatedString + item;
}
var join = words.reduce(concat);
print(join);

var rightConcat = words.reduceRight(concat);
print(rightConcat);


function Letters() {
	this.arrayLetters = [];
	this.add = add
	this.displayLetters = displayLetters;
}

function add(letter) {
	return this.arrayLetters.push(letter);
}

function concat(accumilatedLetters, letter) {
	return accumilatedLetters + letter;

}

function displayLetters() {
	print(this.arrayLetters.reduce(concat).toUpperCase());
}



var newLetters = new Letters();
newLetters.add("a");
newLetters.add("h");
newLetters.add("m");
newLetters.add("e");
newLetters.add("d");
newLetters.displayLetters();



function weekTemps() { 
	this.dataStore = []; 
	this.add = add; 
	this.weekAverage = weekAverage;
	this.monthAverage = monthAverage;

}

function add(temp) { 
	this.dataStore.push(temp);
}


function weekAverage() {
	var total = 0;
	for (var i = 0; i < this.dataStore.length; ++i) {
		total += this.dataStore[i]; 
	}
	 total = total / this.dataStore.length; 
	 return total.toFixed(2)
}

function monthAverage() {
	var total = 0;
	var average = 0.0;
	for (var row = 0; row < this.dataStore.length; ++row) {
		for (var col = 0; col < this.dataStore[row].length; ++col) { 
			total += this.dataStore[row][col];
 
		}

       average = total / this.dataStore[row].length;
       return average.toFixed(2);
       total = 0;
       average = 0.0;
    }
}






var week1 = new weekTemps();
week1.add(52);
week1.add(55);
week1.add(61);
week1.add(65);
week1.add(55);
week1.add(50);
week1.add(52);
print(week1.weekAverage()); // displays 54.875

var week2 = new weekTemps();
week2.add(52);
week2.add(55);
week2.add(60);
week2.add(63);
week2.add(61);
week2.add(64);
week2.add(66);
print(week2.weekAverage()); // displays 54.875

var week3 = new weekTemps();
week3.add(45);
week3.add(40);
week3.add(45);
week3.add(50);
week3.add(55);
week3.add(60);
week3.add(65);
print(week3.weekAverage());

var week4 = new weekTemps();
week4.add(50);
week4.add(55);
week4.add(61);
week4.add(70);
week4.add(74);
week4.add(78);
week4.add(75);
print(week4.weekAverage());


var thisMonth = new weekTemps();
var randomMonth = [
  
  [45,23,32,12,31,21,22],
  [12,12,13,11,9,34,23],
  [33,34,23,25,26,12,11],
  [14,15,18,19,22,24,25]

];
thisMonth.add(randomMonth)




print(thisMonth.dataStore[0][1])

const fibonaci = [];
fibonaci[1] = 1;
fibonaci[2] = 1;

for (var i = 3; i < 20; i++) {
	print(fibonaci[i] = fibonaci[i - 1] + fibonaci[i - 2]);

} 

for(var i = 1; i<fibonacci.length; i++){ //{5} 
  console.log(fibonacci[i]);         }  //{6} 

var numbers = [];
for (var i = 0; i < 14; i++) {
	
	
	numbers[i] = i + 1;

}

numbers.push(15);
numbers.push(16);
print(numbers)

for (var i = numbers.length; i >= 0 ; i--) {
	numbers[i] = numbers[i-1]
	
}
numbers[0] = -1;
print(numbers)


for (var i = 0; i < numbers.length; i++) {
	numbers[i] = numbers[i + 1]
}

numbers[0] = -2;
print(numbers);




var averageTemp = []; 
averageTemp[0] = [72,75,79,79,81,81]; 
averageTemp[1] = [81,79,75,75,73,72]; 

function printMyMatrix(myMatrix) {
	for (var i = 0; i < myMatrix.length; i++) {
		for (var j = 0; j < myMatrix[i].length; j++) {
			 print(myMatrix[i][j]);
		}
	}
}

printMyMatrix(averageTemp)

var matrix3x3x3 = []; 
for (var i=0; i<3; i++){ 
  matrix3x3x3[i] = []; 
  for (var j=0; j<3; j++){ 
    matrix3x3x3[i][j] = []; 
    for (var z=0; z<3; z++){ 
      matrix3x3x3[i][j][z] = i+j+z; 
    } 
  } 
} 

for (var i=0; i<matrix3x3x3.length; i++){ 
  for (var j=0; j<matrix3x3x3[i].length; j++){ 
    for (var z=0; z<matrix3x3x3[i][j].length; z++){ 
      print(matrix3x3x3[i][j][z]); 
    } 
  } 
} 










