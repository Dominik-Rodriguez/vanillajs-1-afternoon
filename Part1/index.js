const tictacArray = [];

function play(clickedId) {
  const playerSpan = document.getElementById('player');
  const clickedElement = document.getElementById(clickedId);

  if (playerSpan.innerText === 'X') {
    playerSpan.innerText = 'O';
    clickedElement.innerText = 'X';
    tictacArray[clickedId] = 'X';
  } else {
    playerSpan.innerText = 'X';
    clickedElement.innerText = 'O';
    tictacArray[clickedId] = 'O';
  }
  console.log(tictacArray);

  const topleft = tictacArray[0];
  const topmid = tictacArray[1];
  const topright = tictacArray[2];
  const midleft = tictacArray[3];
  const center = tictacArray[4];
  const midright = tictacArray[5];
  const bottomleft = tictacArray[6];
  const bottommid = tictacArray[7];
  const bottomright = tictacArray[8];

  // CHECKS ALL WINNING COMBINATIONS
  if (topleft !== undefined && topleft === topmid && topleft === topright) {
    alert(`${topleft} is the winner, press the RESET button to reload the game!`);
    return;
  }
  if (midleft !== undefined && midleft === center && midleft === midright) {
    alert(`${midleft} is the winner, press the RESET button to reload the game!`);
    return;
  }
  if (bottomleft !== undefined && bottomleft === bottommid && bottomleft === bottomright) {
    alert(`${bottomleft} is the winner, press the RESET button to reload the game!`);
    return;
  }
  if (topleft !== undefined && topleft === midleft && topleft === bottomleft) {
    alert(`${topleft} is the winner, press the RESET button to reload the game!`);
    return;
  }
  if (topmid !== undefined && topmid === center && topmid === bottommid) {
    alert(`${topmid} is the winner, press the RESET button to reload the game!`);
    return;
  }
  if (topright !== undefined && topright === midright && topright === bottomright) {
    alert(`${topright} is the winner, press the RESET button to reload the game!`);
    return;
  }
  if (topleft !== undefined && topleft === center && topleft === bottomright) {
    alert(`${topleft} is the winner, press the RESET button to reload the game!`);
    return;
  }
  if (bottomleft !== undefined && bottomleft === center && bottomleft === topright) {
    alert(`${bottomleft} is the winner, press the RESET button to reload the game!`);
    return;
  }

  let noWinner = true;
    for(let i = 0; i < 9; i++){
        if(tictacArray[i] === undefined){
            noWinner = false;
        }
    }
    if(noWinner === true){
        alert("No winner :/, press the RESET button to reload the game!");
        return;
    }

}

function reset(){
    window.location.reload();
}