var squares = document.querySelectorAll(".square");
var result = document.getElementById("winner");
var resetbtn = document.getElementById("reset");
var currentPlayer = "X";
var nbrclick = 0;
function switchPlayer(){
    if (currentPlayer == "X"){
        currentPlayer = "O";
    }
    else{
        currentPlayer = "X";
    }
}

squares.forEach(function(square) {
    square.addEventListener("click", function(){
        if(square.innerHTML == ""){
            nbrclick++;
            if (nbrclick >= 9){
                square.innerHTML = currentPlayer;
                result.innerHTML = "There is no winner";
                nbrclick = 0;
                checkwinner();
                disableSquares();
                
            }
            else{
            square.innerHTML = currentPlayer;
            checkwinner();
            switchPlayer();
            }
            checkwinner();
        }
    });

});

function disableSquares(){
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.pointerEvents = "none";
      }
}


function checkwinner(){
    var winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      for (var i = 0; i<winningCombinations.length ; i++){
        var combination = winningCombinations[i];
        if((squares[combination[0]].innerHTML == currentPlayer) && 
        (squares[combination[1]].innerHTML == currentPlayer) && 
        (squares[combination[2]].innerHTML == currentPlayer)){
            disableSquares();
            result.innerHTML = "player "+currentPlayer+" is th winner";
            nbrclick = 0;
        }
      }
}

resetbtn.addEventListener("click", function(){
    squares.forEach(function(square){
        square.innerHTML = "";
        square.style.pointerEvents = "auto";
    });
    result.innerHTML = "";
});