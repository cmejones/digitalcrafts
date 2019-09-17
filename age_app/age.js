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
  if (age > 25) {
    return true; 
  } else {
  return false;
}}

//child age function
var isChild = function(age) {
  if (age <= 10) {
  return true;
 } else {
  return false;
}}


//Outputs
var agesArray = [];
var testAges = function(name, age) {
  var message = ""; 

  if (canDrive(age)) {  
   message = name + " can drive.";
  } else {
    message = name + " can\'t drive.";
  }
  agesArray.push(message);

 if (canRent(age)) {
    message = name + " can rent a car.";
  } else {
    message = name + " can\'t rent a car.";
  }
  agesArray.push(message);

  if (canDrink(age)) {
    message = name + " can drink.";
  } else {
    message = name + " can\'t drink.";
  }
  agesArray.push(message);

  if (isChild(age)) {
    message = name + " can play at McDonald\'s.";
  } else {
    message = name + " can\'t play at McDonald\'s.";
  }
  agesArray.push(message);
}

//Test Results
testAges("Sarah", 32);
testAges("Bob", 19);
testAges("Henry", 22);
testAges("Katie", 9);


console.log(agesArray);

