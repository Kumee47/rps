
//Start the game    

const match = document.querySelector('.match');

// const restartBtn = document.querySelector('.restart');
    const restart = () => {
            location.reload();
        
    }


const game = ()=> {
    let pScore = 0;
    let cScore = 0;


    const startGame = () =>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
    
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

                // Update Images
                playerHand.src = `./images/${this.textContent}.png`;
                computerHand.src = `./images/${computerChoice}.png`;

                compareHands(this.textContent,computerChoice)
                console.log(this.textContent,computerChoice)
               },1500 )

                playerHand.style.animation = "shakePlayer 1.5s ease";
                computerHand.style.animation = "shakeComputer 1.5s ease";


            });
        });
    };    
    
   
    
const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    const limit = document.querySelector('.limit p').textContent;
    const outro = document.querySelector('.outro');
    // console.log(limit, parseInt(limit));
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
    if (parseInt(limit) === pScore) {
        // alert('Player Wins!!');
        match.classList.remove('fadeIn');
        match.classList.add('fadeOut');
        outro.classList.remove('fadeOut');
        outro.classList.add('fadeIn');
        outro.style.animation = "1.5s ease"
        document.querySelector('.outro').innerHTML = `<h1> Game Over, Player Wins!!!</h1>
        <button onclick="restart()">Play Again</button>`;
    } else if (parseInt(limit) === cScore) {
        // alert('Computer Wins!!');
        match.classList.remove('fadeIn');
        match.classList.add('fadeOut');
        outro.classList.remove('fadeOut');
        outro.classList.add('fadeIn');
        document.querySelector('.outro').innerHTML = `<h1> Game Over, Computer Wins!!!</h1>
        <button onclick="restart()">Play Again</button>`;
    }
};      

    
const compareHands = (playerChoice, computerChoice) =>{
    const winner = document.querySelector('.winner');
    if(playerChoice === computerChoice){
        winner.textContent = 'It is a tie.';
        console.log(pScore, cScore);
        return;
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        winner.textContent = 'Player wins this round!';
        pScore++;
        console.log(pScore, cScore);
        updateScore();
        return;
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        winner.textContent = 'Player wins this round!';
        pScore++;
        console.log(pScore, cScore);
        updateScore();
        return;
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        winner.textContent = 'Player wins this round!';
        pScore++;
        console.log(pScore, cScore);
        updateScore();
        return;
    } else{
        winner.textContent = 'Computer wins this round!'
        cScore++;
        console.log(pScore, cScore);
        updateScore();
        return;
    }
}

    
    //Call all the inner functions
    startGame();
    playMatch();



};
game();