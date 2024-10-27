console.log("Hello World");

var playerScore;
var ComputerScore;
var tryAgainString = "";



function PlayGame()
{
    for(let i = 0; i <= 4; ++i)
    {

        function getComputerChoice()
        {
            let choice = Math.floor(Math.random()* 3);

            return choice;
        }

        function getHumanChoice()
        {
            let playerChoice = prompt('Please enter your choice, "Rock" , "Paper" , "Scissors"');
            let choice = playerChoice.toLowerCase();
            switch(choice) {
                case "rock":
                    return 0;
                case "paper":
                    return 1;
                case "scissors":
                    return 2;
                default:
                    return 3; 
            }
        }

        function playRound(humanChoice, computerChoice) 
        {
            let humanChoiceString = DeterminChoice(humanChoice);
            console.log("Your choice: " + humanChoiceString);
            let computerChoiceString = DeterminChoice(computerChoice);
            console.log("Computer choice: " +computerChoiceString);
            let outcome = DeterminWinner(humanChoice, computerChoice)
            console.log(outcome);
        }

        function DeterminChoice(choice)
        {
            switch(choice) {
                case 0:
                    return "rock";
                case 1:
                    return "paper";
                case 2:
                    return "scissors";
            }
        }
        function DeterminWinner(humanChoice, computerChoice)
        {
            if(humanChoice === computerChoice)
            {
                return "Draw";
            }
            else if(humanChoice + 1 === computerChoice)
            {
                return "You Win";
            }
            else if(humanChoice - 1 === computerChoice)
            {
                return "You Lose";
            }
            else if (humanChoice === 2)
            {
                return "You Win";
            }

            
        }



        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);

    }
}

PlayGame(playerScore, ComputerScore);

