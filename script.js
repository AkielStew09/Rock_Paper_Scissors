const options = ['rock','paper','scissors'];
let humanScore = 0;
let computerScore = 0;

let getComputerChoice = ()=>{
    let choice = Math.floor(Math.random() * 3);
    return options[choice];
}

let getHumanChoice = ()=>{
    let input = prompt('Enter your choice between rock, paper and scissors:');
    return input;
}
