// In this exercise we are going to find an array that has duplicate values
// We will have a first loop that goes through all of items in an array
// will we have a second loop that checks all of the items against the index of the first loop

var items = ["Cat", "Dog", "Ferret", "Alien", "Dog", "Bird", "Ferret"]; 

for (var i=0; i<items.length; i++) {
	//console.log(items[i]);
	for (var b=0; b<items.length; b++) {
		if (i != b && items[i] === items[b]) {
		console.log(items[b]);
}
	}

}

