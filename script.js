const playGame = (limit)=>{

    rockBtn = document.querySelector("#rockBtn");
    paperBtn = document.querySelector("#paperBtn");
    scissorsBtn = document.querySelector("#scissorsBtn");

    const options = ['rock','paper','scissors'];

    const getComputerChoice = ()=>{
        let choice = Math.floor(Math.random() * 3);
        return options[choice];
    }

    const getHumanChoice = ()=>{
        let input = prompt('Enter your choice between rock, paper and scissors: ');
        return input;
    }

    let humanScore = 0;
    let computerScore = 0;
    let results = document.querySelector("#results");

    const playRound = (humanChoice, computerChoice)=>{
        humanChoice = humanChoice.toLowerCase().trim();
        computerChoice = computerChoice.trim();
        //no need to trim them anymore but just for good practice.

        let winner = '';

        if(humanChoice == 'rock'){
            switch (computerChoice) {
                case 'rock':
                    winner = 'draw';
                    break;
                case 'paper':
                    winner = 'computer';
                    break;
                case 'scissors':
                    winner = 'human';
                    break;
                default:
                    break;
            }
        }
        else if(humanChoice == 'paper'){
            switch (computerChoice) {
                case 'rock':
                    winner = 'human';
                    break;
                case 'paper':
                    winner = 'draw';
                    break;
                case 'scissors':
                    winner = 'computer';
                    break;
                default:
                    break;
            }
        }
        else if(humanChoice == 'scissors'){
            switch (computerChoice) {
                case 'rock':
                    winner = 'computer';
                    break;
                case 'paper':
                    winner = 'human';
                    break;
                case 'scissors':
                    winner = 'draw';
                    break;
                default:
                    break;
            }
        }

        if(winner == 'human'){
            ++humanScore;
            hRes = document.createElement("p");
            hRes.textContent = `You win! ${humanChoice} beats ${computerChoice}.  ${humanScore} - ${computerScore}.`;
            results.appendChild(hRes)
        }
        else if (winner == 'computer'){
            ++computerScore;
            cRes = document.createElement("p");
            cRes.textContent = `You lose! ${computerChoice} beats ${humanChoice}.  ${humanScore} - ${computerScore}.`;
            results.appendChild(cRes);
        }
        else if (winner == 'draw'){
            dRes = document.createElement("p");
            dRes.textContent = `Draw! ${humanChoice} and ${computerChoice} are the same.  ${humanScore} - ${computerScore}.`;
            results.appendChild(dRes);
        }


        if(humanScore == limit || computerScore == limit) endMessage();
    
    }
    

    // play the game by running five rounds

    // for(let i = 0; i < rounds; ++i){
    //     playRound(getHumanChoice(), getComputerChoice());
    // }

    rockBtn.addEventListener("click", ()=>{
        //the event listener is kinda isolated, so I have to put a check inside of it
        //to see if the winning score has been reached
        if(humanScore == limit || computerScore == limit) endMessage();
        else playRound("rock", getComputerChoice());
    });

    paperBtn.addEventListener("click", ()=>{
        if(humanScore == limit || computerScore == limit) endMessage();
        else playRound("paper", getComputerChoice());
    });
    scissorsBtn.addEventListener("click", ()=>{
        if(humanScore == limit || computerScore == limit) endMessage();
        else playRound("scissors", getComputerChoice());
    });
    

    //when someone reaches 5 wins
    const endMessage = ()=>{
        if(humanScore > computerScore){
            let hWin = document.createElement("h4");
            hWin.textContent = 'YOU HAVE WON! Your final score is ' + humanScore + " to the computer's " + computerScore+'.';
            results.appendChild(hWin);
        }else{
            let cWin = document.createElement("h4");
            cWin.textContent = 'YOU HAVE LOST! Your final score is ' + humanScore + " to the computer's " + computerScore+'.';
            results.appendChild(cWin);
        }
    }

    //after game is over
    
}

//Playing the game where the first one to reach the argument score wins!
playGame(5);






