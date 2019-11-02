// Part 3 - Resolve Reject

// Write a function called addNumbers(x, y) that 
//returns a new Promise() that adds two numbers and resolves the answer. 
//However, if the two inputs provided are not both numbers reject the promise.
// The API should work like the following:


function addNumbers(x,y) {
    return new Promise((resolve, reject) => {
        try {
            if (isNaN(x) || isNaN(y)) {  //can put multiple "if statements" for each iteration
            throw new Error('one or both inputs are not numbers');
        }
        const answer = x + y;
        resolve (answer);
    } catch (error) {
        reject (error);
    }
})
}

//////////  other option  ////////////

// function addNumbers(x,y) {
//     return new Promise((resolve, reject) => {
//         if (isNaN(x) || isNaN(y)) {
//             reject('one or both inputs are not numbers');
//         }
//         const answer = x + y;
//         resolve (answer);
//     })
// }

addNumbers(1, 2)
    .then(function (answer) {
        console.log(answer);
    })
    .catch(function (error) {
        console.log(error);
    });

addNumbers('word', '2')
    .then(function (answer) {
        console.log(answer);
    })
    .catch(function (error) {
        console.log(error);
    });
