const playerOneScoreDisplay=document.getElementById('p1Score');
const playerTwoScoreDisplay=document.getElementById('p2Score');
const winingScoreDisplay=document.querySelector('p span');

const inputPlace=document.getElementById('input-score');

const playerOneButton=document.getElementById('player-one-btn');
const playerTwoButton=document.getElementById('player-two-btn');
const scoreResetButton=document.getElementById('reset-button');
let p1Score=0;
let p2Score=0;
let winningScore=5;
let gameOver=false;


playerOneButton.addEventListener('click',()=>{
    if(!gameOver){
        p1Score++;
   
       winner(p1Score);
    }
   
    playerOneScoreDisplay.textContent=p1Score;
 
})
playerTwoButton.addEventListener('click',()=>{
    if(!gameOver){
        p2Score++;
      winner(p2Score);
    }
    
    playerTwoScoreDisplay.textContent=p2Score;
})

function winner(score){
    if(score===winningScore){
        gameOver=true;
          playerTwoButton.setAttribute('disabled','disabled');
          playerOneButton.setAttribute('disabled','disabled');
     }
}

inputPlace.addEventListener('change',()=>{
    
    winingScoreDisplay.textContent=inputPlace.value;
    
    winningScore=Number(inputPlace.value);
    inputPlace.value='';
    reset();

})
function reset(){
    
        p1Score=0;
        p2Score=0;
        gameOver=false;
        playerOneScoreDisplay.textContent=0;
        playerTwoScoreDisplay.textContent=0;
        playerOneButton.removeAttribute('disabled');
        playerTwoButton.removeAttribute('disabled');
    
    
}
scoreResetButton.addEventListener("click",reset)