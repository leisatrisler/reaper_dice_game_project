let soulOne, soulTwo, soulThree, soulFour, soulFive, soulSix;

document.addEventListener('DOMContentLoaded', function () {
const rollButton = document.getElementById('bet-your-life');
const rollScore = document.getElementById('roll-score');
const soulsCollected = document.getElementById('total-score');
const life_result = document.getElementById('life_result');
soulOne = document.getElementById('soul_1');
soulTwo = document.getElementById('soul_2');
soulThree = document.getElementById('soul_3');
soulFour = document.getElementById('soul_4');
soulFive = document.getElementById('soul_5');
soulSix = document.getElementById('soul_6');
playTheDevilsSong();

  let currentSoulScore = 0;
  let perishedSouls = 0;
  let rollsCount = 0;

  function rollSouls() {
    soulRolls =  Math.floor(Math.random() * 6) + 1;
    injectSoulImg(soulRolls);
    console.log("Number on each dice", soulRolls);
    return soulRolls;
  }

  function soulScore(death) {
    const counts = Array(7).fill(0);

  for (const die of death) {
    counts[die]++;
  }
    for (const die of death) {
      counts[die]++;
    }
    if (death.includes(1, 2, 3, 4, 5, 6)) {
      return 1500;
    }

    let score = 0;
    for (let i = 1; i <= 6; i++) {
      if (counts[i] >= 3) { 
        if (i === 1) {
          score += 1000;
        } else {
          score += i * 100;
        }
        counts[i] -= 3;
      }

      if (i === 1) {
        score += counts[i] * 100;
      } else if (i === 5) {
        score += counts[i] * 50;
      }
    }
// Return total_soul_score
    return score;
  }

  function displaySoulScore() {
    rollScore.textContent = `Current Dance With The Devil Souls Collected: ${currentSoulScore}`;
  }

// Update total_soul_score
  function displaySoulsCollected() {
    soulsCollected.textContent = `Total Souls Collected: ${perishedSouls}`;
  }
// For Each Soul Dice Rolled
  function injectSoulImg(soulNum) {
    var soulEl = document.createElement("img");
    if(soulNum === 1) {     
        soulEl.src = "/static/images/soul_1.png";  
        soulEl.id="soulImg";
        soulOne.appendChild(soulEl);
    }
    if(soulNum === 2) {
        soulEl.src = "/static/images/soul_2.png";
        soulEl.id="soulImg";
        soulTwo.appendChild(soulEl);
    }
    if(soulNum === 3) {
        soulEl.src = "/static/images/soul_3.png";
        soulEl.id="soulImg";
        soulThree.appendChild(soulEl);
    }
    if(soulNum === 4) {
        soulEl.src = "/static/images/soul_4.png";
        soulEl.id="soulImg";
        soulFour.appendChild(soulEl);
    }
    if(soulNum === 5) {
        soulEl.src = "/static/images/soul_5.png";
        soulEl.id="soulImg";
        soulFive.appendChild(soulEl);
    }
    if(soulNum === 6) {
        soulEl.src = "/static/images/soul_6.png";
        soulEl.id="soulImg";
        soulSix.appendChild(soulEl);
    }

  }
  function dancingWithTheDevil(text) {
    console.log(text)
    life_result.textContent = text;
  }

// Escape Death when you get to 10,000
  function checkSoulsWin() {
    if (perishedSouls >= 10000) {
      console.log("test for appending or changing the image");
      const reaperDiceGame = document.getElementById('reaper-dice-game').style.color = 'black';
      
      document.body.style.backgroundImage = "url('/static/images/escaping_death.png')";
      dancingWithTheDevil('Lucky You, You have escaped death this time, catch you in the next life.');
    }
  }

  function rollSoulsButtonHandler() {
    removePreviousSouls();
    const deathDice = Array(6).fill().map(rollSouls);

    currentSoulScore = soulScore(deathDice);
    perishedSouls += currentSoulScore;
    rollsCount++;

    displaySoulScore();
    displaySoulsCollected();
    dancingWithTheDevil('');

    if (currentSoulScore === 0) {
      document.body.style.backgroundImage = "url('/static/images/game_over.png')";
      dancingWithTheDevil('You Scored "0" Points, Your Soul Is Mine');
    }

    if (currentSoulScore === 1500) {
      dancingWithTheDevil('You Scored "1,500" Points, You Have Escaped My Scythe... This Time Anyways.');
    }

    
    if (rollsCount > 1 && currentSoulScore > 0) {
      checkSoulsWin();
    }

    if(perishedSouls > 66666) {
        console.log("66666")
        document.body.style.backgroundImage = "url('/static/images/game_over.png')";
        dancingWithTheDevil('Greed... one of the seven deadly sins, one of the mortal sins. Your soul has been collected.  !GAME_OVER!');
    }
  }

  rollButton.addEventListener('click', rollSoulsButtonHandler);
});

function removePreviousSouls() {
    if (soulOne.firstChild) {
        console.log("test for removal");
      soulOne.removeChild(soulOne.firstChild);
    }
    if (soulTwo.firstChild) {
      soulTwo.removeChild(soulTwo.firstChild);
    }
    if (soulThree.firstChild) {
      soulThree.removeChild(soulThree.firstChild);
    }
    if (soulFour.firstChild) {
      soulFour.removeChild(soulFour.firstChild);
    }
    if (soulFive.firstChild) {
      soulFive.removeChild(soulFive.firstChild);
    }
    if (soulSix.firstChild) {
      soulSix.removeChild(soulSix.firstChild);
    }
  }


  function playTheDevilsSong(){
    document.getElementById("devil-dont-play").play();

  }