function lvl6exercise1 (num) {
  // Return 'hello' if num is 1, 'world' if num is 2, otherwise return 'bye'
 if (num == 1) {
  return "hello"; 
} else if (num == 2) {
  return "world"; 
} else return "bye";
}
console.log(lvl6exercise1(5));

function lvl6exercise2 () {
  // Push 10 'hello' strings into the array using a for loop, then return it
  var arr = [];
//  var string = "hello";
  var i;
  for (var i=0; i<10; i++) {
    arr.push("hello");
} 
  return arr;
}
console.log(lvl6exercise2());

function lvl6exercise3 () {
  // Empty this array using a while loop and return it
  var arr = ['hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello'] 

//counts the length of the arary to call the function if there is anything present
  while(arr.length) {
//creates a variable to remove all elements
   var empty = arr.pop();
}

  return arr;
}
console.log(lvl6exercise3());
