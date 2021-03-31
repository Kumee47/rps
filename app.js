const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    //Start the game    
    const startGame = ()=> {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', ()=> {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');

        });
    };
    //Play match
    const playMatch = ()=> {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand =>{
            hand.addEventListener('animationend',function(){
                this.style.animation = '';
            });
        });

        //Computer Options
        const computerOptions = ['rock','paper','scissors'];

        options.forEach(option => {
            option.addEventListener('click', function(){
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                //How the computer compares hands
                
               setTimeout(() =>{
                compareHands(this.textContent,computerChoice)

                // Update Images
                playerHand.src = `./images/${this.textContent}.png`;
                computerHand.src = `./images/${computerChoice}.png`;
               },1500 )

                playerHand.style.animation = "shakePlayer 1.5s ease";
                computerHand.style.animation = "shakeComputer 1.5s ease";


            });
        });
    };    
    
    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');  
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };      
    
        
    const compareHands = (playerChoice, computerChoice) =>{
        const winner = document.querySelector('.winner');
        if(playerChoice === computerChoice){
            winner.textContent = 'It is a tie.';
            return;
        }

        if (playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player wins!';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer wins!'
                cScore++;
                updateScore();
                return;
            }
        }
        if (playerChoice === 'paper'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Player wins!'
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer wins!'
                cScore++;
                updateScore();
                return;
            }
        }
        if (playerChoice === 'scissors'){
            if(computerChoice === 'paper'){
                winner.textContent = 'Player wins!'
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer wins!'
                cScore++;
                updateScore();
                return;
            }
        }

    }

    //Call all the inner functions
    startGame();
    playMatch();



};

game();

