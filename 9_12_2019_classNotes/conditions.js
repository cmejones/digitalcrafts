// >  Greater
// < Less
// == Equal to
// != not equal to
// >=  greater than or equal to
// <= lesser than or equal to

if(3>5) {
  console.log("3 is greater than 5");
} else {
  console.log("3 is not greater than 5");
}

var x = 10;
var y = 30;

if(x==y) {
  console.log("X is equal to Y");
} else if (x != y) {
  console.log("HMMMM Loop Hole");
} else {
  console.log("X is NOT equal to Y, you dumbass");
}

var marvel = "Marvel";
var DC = "DC";

if (marvel != DC) {
  console.log("Marvel does not equal DC"); 
} else if (marvel == DC) {
  console.log("Marvel is equal to DC");
} else if (marvel > DC) {
  console.log("Marvel is greater than DC"); 
} else if (marvel >= DC) {
  console.log ("Marvel is greater than or equal to DC");
} else {
  console.log("Marvel is less than DC");
}

console.log("showing lengths");
console.log(marvel.length);
console.log(DC.length);

