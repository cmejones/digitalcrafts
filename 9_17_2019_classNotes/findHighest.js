
var numbers = [3, 8, 12, 1, 6, 15, 3];
var final = 0;
 for (var i=0; i<numbers.length; i++) {
  final += numbers[i];
}
console.log(final);

//USing the For Loop and If Statements inside the for loop
// find the largest number in the array

var numbers1 = [3,8,12,1,6,15,3];
var largest = 0;
 for (var i=0; i<numbers1.length; i++) {
   if (numbers1[i] > largest) {
	largest = numbers1[i];
   }
}
console.log(largest);


// step 1
// create a for loop that creates an array of 100 random numbers

//math.random();

//step 2 
//  from the random number number array, find the smallest

var randomArray = [];
  for (var i = 0; i<100; i++) {
	randomArray.push(Math.random());
  }

//now find the smallest
var smallest = randomArray[0];
  for (var i=0; i < randomArray.length; i++) { 
	if (randomArray[i] < smallest) {
  	smallest = randomArray[i];
	} 
}

console.log("random Array", randomArray);
console.log("smallest", smallest);


