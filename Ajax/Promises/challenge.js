let dropButteredToastOnFloor = (success, failure) => {
    console.log("oh no, I dropped my toast!");
    setTimeout( function(){
        var drop = Math.random();
        if (drop < 0.5) {
            console.log("Landed butter-side up!")
            success();
        } else {
            console.log("Landed butter-side down...")
            failure();
        }
    }, 2000);
}

// YOUR TASK- Write a function called dropToastPromisified(), 
// make it return a new Promise(), and use the dropButteredToastOnFloor() 
// function to call either resolve() or reject(). 
// If done correctly, you should be able to run:


///////////  my solution ////////////

// function dropToastPromisified() {
//     let drop = Math.random();
//     return new Promise((resolve, reject) => {
//         if (drop < 0.5) {
//             console.log("Landed butter-side up!");
//             alert('Whew, that was close!');
//             resolve();
//         } else {
//             console.log("Landed butter-side down...");
//             alert('Well shucks, there goes my toast...');
//             reject();
//         }
//     })
// };

function dropToastPromisified() {
    return new Promise((resolve, reject) => {
        dropButteredToastOnFloor(resolve, reject);
    })
};

dropToastPromisified()
    .then(() => {
        alert('Whew, that was close!');
    }).catch (() => {
        alert('Well shucks, there goes my toast...');
    })
