// step 1: boolean yes or no - function

//step 2: push values into array and add results to find sum

// return results based on values in array

//var yes = 1;
//var no = 0;

//write out questions in array
//var service = ["Did the waiter greet you?", "Did they bring bread or water to start?", "They check on drink refills?", "Did they check if the food was ok?", "Were they prompt in getting the check?"];
//for loop to run through all answers yes or no
//	var points = "";	
//		if service[0] = true {
//		return "1";
//	}

var service = function (answer) {
	let newArray = [];
	for (var i=0; i>1; i++) {
	if (answer) {
//for loop to push into array
		return 1;
	} else {
		return 0;
	}
}
newArray.push(answer);

console.log("newArray", newArray);
}

//console.log("array", newArray);

var points = [service(true) + service(false) +  service(false)];
console.log("service", service(points));
	

//sum results and calculate tip and return tip amount

console.log("greeting", service(true));
console.log("bread", service(false));
console.log("refills", service(false));
console.log("taste",service(true));
console.log("prompt",service(true));


