//the functions

//driver function
var canDrive = function(age) {
  if(age >= 16) {
    return true;
  } else {
  return false;
}}

//drinking function
var canDrink = function(age) {
  if(age >= 21) {
    return true;
  } else {
  return false;
}}

//renting function
var canRent = function(age) {
  if (age >= 25) {
    return true; 
  } else {
  return false;
}}

//child age function
var isChild = function(age) {
  if (age >= 9) {
  return true;
 } else {
  return false;
}}


//Outputs

if (canRent(32)) {  
 console.log("Sarah can rent a car");
} else {
  console.log("You are too young.");
}

if (canDrive(19)) {
  console.log("Bob can drive");
}

if (canDrink(22)) {
  console.log("Henry can drink");
}
 if (isChild(age)) {
  console.log(name + " can't play at McDonald's");
}

//Array
var resultsArray = [];

