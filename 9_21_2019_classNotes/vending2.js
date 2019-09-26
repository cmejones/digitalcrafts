//Vending machines give us the ability to buy food and drink anywhere we go!
//You are hired to write a vending machine app for a new line of machines to be released

//The vending machine will have the following items and prices: //object
//-Snickers $1.25
//-Popcorn $1.00
//- Chewing Gum $0.25
//- Nuts $0.50
//-Cookies $1.70
//-Cup Noodles $2.25

//The vending machine can accept the following currency: // object
//-Nickel $0.05
//-Dime $0.10
//-Quarter $.25
//-Dollar $1.00

//When a person is buying from the vending machine, the following happen:
//a list of items is shown to them with the prices
//they insert money into the machine based on the allowed currency above
//they then select their item and the following can happen:
//If the amount entered is less than what the item cost, an error message is produced
//stating they have not entered enough money
//IF the amount is equal to or above the amount of the item, they should get their item and 
//leftover change, if any
//If they do not choose an item, all the money can be returned to them

//Your task is to create a simulation in which 5 different buyers attempt to buy an item
//from the vending machine. Remember everything we have learned:
//If statements
//For loops
//Arrays
//Objects
//Functions

var snacks= [
    {name: "Snickers", price: 1.25},
    {name: "Popcorn", price: 1.00},
    {name: "Chewing Gum", price: 0.25},
    {name: "Nuts", price: 0.50},
    {name: "Cookies", price: 1.70},
    {name: "Cup Noodles",  price: 2.25}
];
//global variables

var nickel= 0.05;
var dime= .10;
var quarter= .25;
var dollar= 1;
var moneyStored= 0


//display items with prices

var displaySnacks = function (items) {
    for(var i=0; i<items.length; i++) {
        var menuItem = items[i];
        console.log(menuItem.name + ' $' + menuItem.price) 
    }
};
displaySnacks(snacks);

var steveMoney= [dollar, quarter, nickel, dime];
var steveTotal= steveMoney.reduce((a, b) => a + b, 0)

var kevinMoney= [quarter, nickel, dime, dollar];
var kevinTotal= kevinMoney.reduce((a,b) => a + b, 0)

var sarahMoney= [dime, dime, nickel, quarter, quarter, dollar];
var sarahTotal= sarahMoney.reduce((a,b) => a + b, 0)

var anneMoney= [dollar, dollar];
var anneTotal= anneMoney.reduce((a,b) => a + b, 0)

var willMoney= [quarter, quarter, quarter, dime, dime, nickel ];
var willTotal= willMoney.reduce((a,b) => a + b, 0)


var vending = function(item, money) { //"item" is the unknown, aka what the person is trying to buy
    if (item == null) {
        console.log("Your money, $" + money + "will be returned.")
    } else
    for (var i=0; i<snacks.length; i++) {
        var selection = snacks[i];  //creating variable that pulls information from snacks array above
        if (selection.name == item && selection.price <= money) {
            console.log("Here is your ", selection.name);
            if (money > selection.price) {  
                console.log("And your change is... $", money-selection.price);
            }
        }
        else if (selection.name == item && selection.price >= money) {  //error message if person needs more money for snack
            console.log("You can't afford this!!")
        }
    }
}

vending("Snickers", steveTotal)
vending("Cup Noodles", willTotal)
//vending("Nuts ", anneTotal)
//vending("Cookies", kevinTotal)
vending("Chewing Gum", sarahTotal)