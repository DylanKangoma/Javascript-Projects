
const playerOneName = "Dylan";
const playerTwoName = "Dyke";
const playerOneMarker = "X";
const playerTwoMarker = "O";


const playerOne = {
  name: "Dylan",
  marker: "X"
};

const playerTwo = {
  name: "Dyke",
  marker: "O"
};

function printName(player) {
    console.log(player.name);
  }
  function gameOver(winningPlayer){
    console.log("Congratulations!");
    console.log(winningPlayer.name + " is the winner!");
  }
  
  