function round(){
// User choice

var userChoice = prompt("Rock, Paper or Scissors?").toLowerCase();

    document.write("<p> Player choice: " + userChoice + "</p>");


// scores

var userScore = 0;
var computerScore = 0;

//Computer Choice
var computerChoice = Math.random();

    if (computerChoice < 0.34){

        computerChoice = "rock";

    } else if (computerChoice <= 67){

        computerChoice = "scissors";

    } else {

        computerChoice = "paper";
    }

// Display Computer Choice 

    document.write("<p> Computer choice: " + computerChoice + "</p>");

// Game function 

var compare = function(choice1, choice2){

    if (choice1 === choice2){

        return "It's a tie!";
    }

    if (choice1 === "rock"){
       if (choice2 === "scissors"){ 

        return "You win!!";


    } else { // Paper wins

        return "You lose! Refresh to try again.";
    }

    }

        if (choice1 === "paper"){

        if (choice2 === "rock"){

            return "You win!!";

    } else { // Scissors win
            return "You lose! Refresh to try again.";
        }

        }

        if (choice1 === "scissors"){

         if (choice2 === "paper"){
            
            return "You win!!";

        } else { // Rock win

            return "You lose! Refresh to try again."

        }   

        }
};
        // Store results
        var results = compare(userChoice, computerChoice);

        // Display Results

        document.write(results);
}

round();
round();
round();
round();
round();