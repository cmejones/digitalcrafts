/** Vending Machine Group Exercise*

Vending Machines give us the ability to buy food and drink anywhere we go! You are hired as a contractor to write a vending machine application for a new line of vending machines to be released.

The vending machine will have the following items and prices: //array with objects
- Snickers  $1.25
- Popcorn   $1.00
- Chewing Gum $0.25
- Nuts $0.50
- Cookies $1.70
- Cup Noodles $2.25

The vending machine can accept the following currency: //object
- Nickel $0.05
- Dime $0.10
- Quarter $.25
- Dollar $1.00

When a person is buying from the vending machine, the following happen:
- A list of items is shown to them with the prices //display object
- They insert money into the machine based on the allowed currency above //loop array?
- They then select their item and the following can happen: //if statements with loop array
-- If the amount entered is less than what the item cost, an error message is produced stating they have not entered enough money
-- If the amount is equal to or above the amount of the item, they should get their item and left over change, if any
-- If they do not choose an item, all the money can be returned to them

Your task is to create a simulation in which 5 different buyers attempt to buy an item from the vending machine. Remember everything we have learned in class to use are your disposal:
- If Statements
- For Loops
- Arrays
- Objects
- Functions

With a partner, please discuss the problem by laying each piece of the problem 1 step at a time, and work your way through the problem.

**/

// array with objects to store the snack item and associated price
var snacks = [
    {name: "Snickers", price: 1.25},
    {name: "Popcorn", price: 1.00},
    {name: "Chewing Gum", price: 0.25},
    {name: "Nuts", price: 0.50},
    {name: "Cookies", price: 1.70},
    {name: "Cup Noodles", price: 2.25}
];

// global variables
var nickel = 0.05;
var dime = 0.10;
var quarter = 0.25;
var dollar = 1.00;
var moneyStored = 0;


// function to display what snacks are in the vending machine
var displaySnacks = function (items) {
    for(var i=0; i<items.length; i++) {
        var menuItem = items[i];
        console.log(menuItem.name + ' $' + menuItem.price) 
     }
};
displaySnacks(snacks);

//function to store value of each piece of money entered into the vending machine
var moneyInput = function(item) {

    if (item == nickel) {
        moneyStored += 0.05;
    };
    if (item == dime) {
        moneyStored += 0.10;
    };
    if (item == quarter) {
        moneyStored += 0.25;
    };
    if (item == dollar) {
        moneyStored += 1.00;
    };
    return moneyStored;
};

//money input
console.log(moneyInput(dollar));
console.log(moneyInput(dollar));

//vending function
//need to return change
//don't return selection if not equal to item

var itemSelected = function(item) { //"item" is the unknown, aka what the person is trying to buy
    if (item == null) {
        console.log("Your money, $",moneyStored, "will be returned.")
    } else
    for (var i=0; i<snacks.length; i++) {
        var selection = snacks[i];  //creating variable that pulls information from snacks array above
        if (selection.name == item && selection.price <= moneyStored) {
            console.log("You get: ", selection.name);
            if (moneyStored > selection.price) {  //if statement to return change
                console.log("And your change is... $", moneyStored-selection.price);
            }
        }
        else if (selection.name == item && selection.price >= moneyStored) {  //error message if person needs more money for snack
            console.log("You need more money, sucka!")
        }
    }
}

//itemSelected();
itemSelected("Snickers");
//itemSelected("Chewing Gum");
//itemSelected("Nuts");
//itemSelected("Cup Noodles");
//itemSelected("Cookies");
//itemSelected("Popcorn");

