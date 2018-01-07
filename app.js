/// For Coding Challenge 3.......


var scores, roundScore, activePlayer, dice, gamePlaying;
var lastDice;
initialise();
//document.querySelector('#current-' + activePlayer).textContent = dice;                // see type coercion here
//document.querySelector('#current-' + activePlayer).innerHTML = '<b>' + dice + '</b>';

//var a = document.querySelector('#score-1').textContent;                             /* querySelector for reading
//console.log(a);



document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gamePlaying) {
      // 1.  Random Number
      firstDice = Math.floor(Math.random() * 6) + 1;
      secondDice = Math.floor(Math.random() * 6) + 1;

      //2. Display The Number
      var firstDiceDOM = document.querySelector('.dice1');
      var secondDiceDOM = document.querySelector('.dice2');
      firstDiceDOM.style.display = 'block';
      secondDiceDOM.style.display = 'block';
      firstDiceDOM.src = 'dice-' + firstDice + '.png';
      secondDiceDOM.src = 'dice-' + secondDice + '.png';




      // 3. Update the round score only if the rolled score is NOT 1
       if(firstDice !== 1 && secondDice !== 1){
        // Add
        roundScore = roundScore+firstDice+secondDice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
          }
            else{
        // Next Player
        nextPlayer();
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');


      /*()  if (activePlayer ===0) {
          activePlayer = 1;
        }
        else {
          activePlayer = 0;
        } */
      }

    }

    });

document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying) {
      // Add the CURRENT score to the GLOBAL score
        scores[activePlayer] += roundScore;


      // Update GLOBAL Score at the UI
      document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

      var input= document.querySelector('.final-score').value;
      var winScore;
      // Undefined, 0 or NULL or "" are coerced to false
      // Anything Else is coerced to true
      if (input) {
        winScore = input;
      } else {
        winScore = 100;
      }
      // Check if the player won the game

      if(scores[activePlayer] >= winScore){
        document.querySelector('#name-'+ activePlayer).textContent =  'Winner';
        document.querySelector('.dice1').style.display = 'none';
        document.querySelector('.dice2').style.display = 'none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gamePlaying = false;
      }
      else{
        // Next Player
        nextPlayer();

      }
    }






});


function nextPlayer(){
  // Next Player
  activePlayer ===0 ? activePlayer=1 : activePlayer=0;        //ternary Operator  (instead of if-else)
  roundScore = 0;
  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice1').style.display = 'none';
  document.querySelector('.dice2').style.display = 'none';
}


document.querySelector('.btn-new').addEventListener('click', initialise);


function initialise(){

  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.querySelector('.dice1').style.display = 'none';
  document.querySelector('.dice2').style.display = 'none';

  document.getElementById('score-0').textContent= 0;
  document.getElementById('score-1').textContent= 0;

  document.getElementById('current-0').textContent= 0;
  document.getElementById('current-1').textContent= 0;

  document.querySelector('#name-0').textContent = 'Player 1';
  document.querySelector('#name-1').textContent = 'Player 2';

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');


}
