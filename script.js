const choices = ["rock", "paper", "scissors"];
let player1Score = 0;
let player2Score = 0;
let player1Choice = "";
let player2Choice = "";

// Function to handle player choice
function handlePlayerChoice(player, choice) {
    if (player === 1) {
        player1Choice = choice;
    } else {
        player2Choice = choice;
    }

    // If both players have made their choices, determine the winner
    if (player1Choice && player2Choice) {
        const result = determineWinner(player1Choice, player2Choice);
        updateScore(result);
        displayResult(player1Choice, player2Choice, result);
        player1Choice = ""; // Reset choices for next round
        player2Choice = "";
    }
}

// Event listeners for player choices
document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        if (!player1Choice) {
            handlePlayerChoice(1, button.dataset.choice);
        } else if (!player2Choice) {
            handlePlayerChoice(2, button.dataset.choice);
        }
    });
});

// Event listener for reset button
document.getElementById('reset').addEventListener('click', resetGame);

// Function to determine the winner
function determineWinner(player1, player2) {
    if (player1 === player2) {
        return "It's a tie!";
    } else if ((player1 === "rock" && player2 === "scissors") ||
               (player1 === "paper" && player2 === "rock") ||
               (player1 === "scissors" && player2 === "paper")) {
        player1Score++;
        return "Player 1 wins!";
    } else {
        player2Score++;
        return "Player 2 wins!";
    }
}

// Function to update score
function updateScore(result) {
    document.getElementById('player1Score').textContent = player1Score;
    document.getElementById('player2Score').textContent = player2Score;
}

// Function to display result
function displayResult(player1Choice, player2Choice, result) {
    document.getElementById('result').textContent = `Player 1 chose ${player1Choice}, Player 2 chose ${player2Choice}. ${result}`;
}

// Function to reset the game
function resetGame() {
    player1Score = 0;
    player2Score = 0;
    updateScore();
    document.getElementById('result').textContent = '';
}
