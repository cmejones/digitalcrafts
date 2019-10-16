//The game should have the following attributes:
//- Two players, one player is the computer. The other player is the user.
//- 4 Count. Meaning, there should be some indication of Rock, Paper, Scissor countdown
//- The user and the computer should have the choices of Rock, Paper, Scissors to choose from
//- Winning Conditions ( Scissor bears paper, Paper beats rock, rock beats scissors, tie)
//Think about how the different parts translate to code. Think of what is might each part sounds like?
//- 4 Count might be an interval, and at 0 requires the user to have made a choice
//- The winning conditions might sound like if statement
//- The computer choosing an item sounds like randomly selecting an item

//set up players, retain points

//set up 4 count interval to make choice

//set up winning conditions in an if/else statemen
//////how do you run the random computer with onClick?

//assign points based on winning condition
var gameElement = document.getElementById("game");
var gameData = []; //set up empty array in order to store points

//set up the players
//var player = "";
//var computer = "";

//create the game
var makeGame = function() {

//computer selects randomly
/////////////make this an object to be reusable throughout for both player and computer
var computerArray = [
    "Rock",
    "Paper",
    "Scissors"
];

//starting point to add points per player
var scoreComputer = 1;
var scorePlayer = 1;

//create game options
    for(var row = 0; row < 1; row++) {

        var rowElement = document.createElement("div");
        rowElement.className = "row";
        gameData[row] = [];

        for (var column = 0; column <1; column++) {
            var columnElement = document.createElement("div");
            columnElement.className = "col border text-center";
            columnElement.innerHTML = "Rock"
            columnElement.id = "rock";

            //onclick function to play game         
            columnElement.onclick = function() {

                var randomItem = computerArray[Math.floor(Math.random()*computerArray.length)];
                document.getElementById("computer-selection").innerHTML = "Computer chose: " + randomItem;

                if(this.innerHTML == rock() && randomItem == "Rock") {
                    document.getElementById("player-selection").innerHTML = "You chose: Rock";

                } else if (this.innerHTML == rock() && randomItem == "Paper") {
                    document.getElementById("player-selection").innerHTML = "You chose: Rock so you lose!!!";
                    document.getElementById("computer-score").innerHTML = scoreComputer++;

                } else if (this.innerHTML == rock() && randomItem == "Scissors") {
                    document.getElementById("player-selection").innerHTML = "You chose: Rock so you WIN!!!";
                    document.getElementById("player-score").innerHTML = scorePlayer++;
                }
            }
            gameData[row][column] = columnElement;
            rowElement.appendChild(columnElement);
        }
            for(var row = 0; row < 1; row++) {
            var columnElement = document.createElement("div");
            columnElement.className = "col border text-center";
            columnElement.innerHTML = "Paper"
            columnElement.id = "paper";

            columnElement.onclick = function() {

                var randomItem = computerArray[Math.floor(Math.random()*computerArray.length)];
                document.getElementById("computer-selection").innerHTML = "Computer chooses: " + randomItem;

                if(this.innerHTML == paper() && randomItem == "Paper") {
                    alert("Tie!");
                } else if (this.innerHTML == paper() && randomItem == "Scissors") {
                    alert("You lose!")
                    document.getElementById("computer-score").innerHTML = scoreComputer++;
                } else if (this.innerHTML == paper() && randomItem == "Rock") {
                    alert("you win this round!");
                    document.getElementById("player-score").innerHTML = scorePlayer++;
                }
            }
            gameData[row][column] = columnElement;
            rowElement.appendChild(columnElement);
        }
            for(var row = 0; row < 1; row++) {
            var columnElement = document.createElement("div");
            columnElement.className = "col border text-center";
            columnElement.innerHTML = "Scissors"
            columnElement.id = "scissors";

            columnElement.onclick = function() {

                var randomItem = computerArray[Math.floor(Math.random()*computerArray.length)];
                document.getElementById("computer-selection").innerHTML = "Computer chooses: " + randomItem;

                if(this.innerHTML == scissors() && randomItem == "Scissors") {
                    alert("Tie!");
                } else if (this.innerHTML == scissors() && randomItem == "Rock") {
                    alert("You lose!")
                    document.getElementById("computer-score").innerHTML = scoreComputer++;
                } else if (this.innerHTML == scissors() && randomItem == "Paper") {
                    alert("you win this round!");
                    document.getElementById("player-score").innerHTML = scorePlayer++;
                }
            }
            gameData[row][column] = columnElement;
            rowElement.appendChild(columnElement);
        }        
        gameElement.appendChild(rowElement);
    }
}
//Get the representation of rock
var rock = function() {
    return "Rock";
}

//Get the representation of paper
var paper = function() {
    return "Paper";
}

//Get the representation of scissors
var scissors = function() {
    return "Scissors";
}

makeGame();

//set timer
var makeTimer = function() {

    var i = 1;
    var intervalId = setInterval(function(){
        if (i === 4) {
            clearInterval(intervalId);
        } 
//can I make this a modal? And only start when game is in play; also stop if selection is made
    document.getElementById("timer").innerHTML = i;
    i++;
    }, 1000);

    document.getElementById("rock").addEventListener("click", stopTimer);
    document.getElementById("paper").addEventListener("click", stopTimer);
    document.getElementById("scissors").addEventListener("click", stopTimer);
    
    function stopTimer() {
        clearInterval(intervalId);
    }

}


///change so it's split screen, player selects on left and both results are shown at same time via images