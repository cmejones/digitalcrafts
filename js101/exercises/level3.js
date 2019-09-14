function lvl3exercise1 () {
  // Create a "hello" and a "world", return the concatenation of the two
  return "hello" + " " + "world";
}
console.log(lvl3exercise1());

function lvl3exercise2 () {
  // Create a "hello" and a 12, return the concatenation of the two
  return "hello" + " " + 12;
}
console.log(lvl3exercise2());

function lvl3exercise3 () {
  // Create a variable that equals 12 and convert it to a string with concatenation. Return it.
  var x = 12;
  return "This is the string of " + x.toString();
}
console.log(lvl3exercise3());

function lvl3exercise4 () {
  // Create a "hello world!" string. Return the length of the string
 var string = "hello world!";
 return string.length;
}
console.log(lvl3exercise4());

function lvl3exercise5 () {
  // Create a "hello world!" string. Return the index of the word "world".
 var str = "hello world!";
  var index = str.indexOf("world");
 return index;
}
console.log(lvl3exercise5());
