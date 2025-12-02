function getComputerChoice() {
            randomNumber = Math.floor(Math.random() * 3);
            switch (randomNumber) {
                case 0:
                    return "rock";
                    break;
                case 1:
                    return "paper";
                    break;
                case 2:
                    return "scissors";
                    break;
            }
        }

        let humanScore = 0;
        let computerScore = 0;

        function removeAllChildNodes(parent) {
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
        }

        function playRound(humanChoice, computerChoice) {
            const result = document.querySelector("#result");
            const message = document.createElement("div");
            const h1 = document.createElement("h1");

            

            if ((humanChoice == computerChoice) && (humanChoice !== 0 && computerChoice !== 0)){
                h1.innerText = "It's a Tie!";
            } else if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")) {
                humanScore++;
                h1.innerText = "You won! " + humanChoice + " beats " + computerChoice + "! The score is " + humanScore + "-" + computerScore;
                h1.style.backgroundColor = "lightgreen";
                h1.style.color = "green";

            } else if ((humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "rock")) {
                computerScore++;
                h1.innerText = "You lost! " + computerChoice + " beats " + humanChoice + "! The score is " + humanScore + "-" + computerScore;
                h1.style.backgroundColor = "red";
                h1.style.color = "white";
            }
            message.appendChild(h1);
            result.appendChild(message);

            if (humanScore == 5) {
                h1.innerText = "Congratulations! You've won the rock paper scissors game against the bot. Please click this button to start over."
                h1.style.backgroundColor = "lightgreen";
                h1.style.color = "green";
                const restart = document.createElement("button");
                restart.innerText = "restart";

                message.appendChild(h1);
                message.appendChild(restart);
                result.appendChild(message);

                restart.addEventListener("click", () => {
                    removeAllChildNodes(result);
                    computerScore = 0;
                    humanScore = 0;
                })

            } else if (computerScore == 5) {
                h1.innerText = "Oof.. looks like you've lost to the bot this time. Don't get too down, just click the button to restart!"
                h1.style.backgroundColor = "red";
                h1.style.color = "white";
                const restart = document.createElement("button");
                restart.innerText = "restart";

                message.appendChild(h1);
                message.appendChild(restart);
                result.appendChild(message);

                restart.addEventListener("click", () => {
                    removeAllChildNodes(result);
                    computerScore = 0;
                    humanScore = 0;
                })
            }
        }

const rock = document.querySelector("#rock");

rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

const paper = document.querySelector("#paper");

paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

const scissors = document.querySelector("#scissors");

scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
})