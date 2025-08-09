const options = ['rock','paper','scissors'];


let getComputerChoice = ()=>{
    let choice = Math.floor(Math.random() * 3);
    return options[choice];
}

let getHumanChoice = ()=>{
    let input = prompt('Enter your choice between rock, paper and scissors: ');
    return input;
}




const playGame = ()=>{
    let humanScore = 0;
    let computerScore = 0;
    const playRound = (humanChoice, computerChoice)=>{
        humanChoice = humanChoice.toLowerCase();
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
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            ++humanScore;
        }
        else if (winner == 'computer'){
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            ++computerScore;
        }
        else if (winner == 'draw'){
            console.log(`Draw! ${humanChoice} and ${computerChoice} are the same.`);
        }
    
    }

    //play the game by running five rounds

    for(let i = 0; i < 5; ++i){
        playRound(getHumanChoice(), getComputerChoice());
    }

    //after game is over
    if(humanScore > computerScore){
            console.log('You have WON! Your final score is ' + humanScore);
    }else{
            console.log('You have LOST! Your final score is ' + humanScore);
    }
}
playGame();

