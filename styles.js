
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}


function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Draw";
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        playerScore++;
        return "Player Wins!";
    } else {
        computerScore++;
        return "Computer Wins!";
    }
}


function updateUI(playerChoice, computerChoice, result) {
    
    document.querySelector(".checkers-emoji").textContent = getEmoji(computerChoice);
    document.querySelectorAll(".checkers-emoji")[1].textContent = getEmoji(playerChoice);

    
    document.querySelector(".score-board").textContent = `Computer ${computerScore} ${playerScore} Player`;

    
    document.querySelector(".score").textContent = result;
}


function getEmoji(choice) {
    switch (choice) {
        case "Rock":
            return "✊";
        case "Paper":
            return "✋";
        case "Scissors":
            return "✌️";
        default:
            return "";
    }
}


function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    updateUI(playerChoice, computerChoice, result);
}


function resetScores() {
    playerScore = 0;
    computerScore = 0;
    document.querySelector(".score-board").textContent = `Computer ${computerScore} ${playerScore} Player`;
    document.querySelector(".score").textContent = "Currently Draw";
    document.querySelector(".checkers-emoji").textContent = "✊";
    document.querySelectorAll(".checkers-emoji")[1].textContent = "✊";
}


document.querySelectorAll(".play-button").forEach((button) => {
    button.addEventListener("click", (e) => {
        const playerChoice = e.currentTarget.querySelector(".play-text").textContent;
        playGame(playerChoice);
    });
});


const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
resetButton.style.marginTop = "1rem";
resetButton.style.padding = "0.5rem 1rem";
resetButton.style.borderRadius = "0.5rem";
resetButton.style.backgroundColor = "#ff0000";
resetButton.style.color = "#fff";
resetButton.style.border = "none";
resetButton.style.cursor = "pointer";
resetButton.addEventListener("click", resetScores);

document.querySelector(".mainDiv").appendChild(resetButton);
