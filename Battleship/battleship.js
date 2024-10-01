let rows = 10;
let cols = 10;
let squareSize = 50;


let gameBoardContainer = document.getElementById("gameboard");


for (i = 0; i < cols; i++) {
	for (j = 0; j < rows; j++) {
		
		let square = document.createElement("div");
		gameBoardContainer.appendChild(square);

    
		square.id = 's' + j + i;			
		
		
		let topPosition = j * squareSize;
		let leftPosition = i * squareSize;			
		
		square.style.top = topPosition + 'px';
		square.style.left = leftPosition + 'px';						
	}
}


let hitCount = 0;


let gameBoard = [
				[0,0,0,1,1,1,1,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[1,0,0,0,0,0,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0],
				[1,0,0,1,0,0,0,0,0,0],
				[1,0,0,1,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0]
				]

gameBoardContainer.addEventListener("click", fireTorpedo, false);

function fireTorpedo(e) {
	if (e.target !== e.currentTarget) {
		let row = e.target.id.substring(1,2);
		let col = e.target.id.substring(2,3);
				
		if (gameBoard[row][col] == 0) {
			e.target.style.background = '#bbb';
			gameBoard[row][col] = 3;
			
		} else if (gameBoard[row][col] == 1) {
			e.target.style.background = 'red';
			gameBoard[row][col] = 2;
			
			hitCount++;
			if (hitCount == 17) {
				alert("All enemy battleships have been defeated! You win!");
			}
			
		} else if (gameBoard[row][col] > 1) {
			alert("Stop wasting your torpedos! You already fired at this location.");
		}		
    }
    e.stopPropagation();
}