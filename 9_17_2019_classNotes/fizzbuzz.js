// In this assignment, we are going to have a for loop that 
// iterates over 20 numbers

// if the number at the current i is divisble by both 2 and3, console.log("fizzbuzz);
//if the number at the current i is only divisble by 2, console.log("fizz");
//if the number at the current i is only divisble by 3, console.log("Buzz);

// for division (if divisible), its if(number % other_number)

for (i=0; i<20; i++) {
	if (i % 2==0 && i % 3==0) {
		console.log(i + " fizzbuzz");
	}
	else if (i % 2==0) {
		console.log(i + " fizz");
	}
	else if (i % 3==0) {
		console.log(i + " buzz");
	}   
}
