let currMoleTile;
let currPlantatile;
let score = 0;
let gameOver = false;

window.onload = function() {
  setGame();
}

function setGame() {
  // set up the grid for the game board in html
  for (let i = 0; i < 9; i++) { // i goes from 0 to 8, stops at 9
    // <div id="0-8"></div>
    let tile = document.createElement("div");
    tile.id = i.toString();
    tile.addEventListener("click", selectTile); 
    document.getElementById("board").appendChild(tile);
  }

  setInterval(setMole, 1000); // 1000 miliseconds = 1 seconds
  setInterval(setPlant, 2000); //2000 miliseconds = 2 seconds
}

function getRandomTile() {
  // math.random --> (0-1) * 9 = (0-9) --> round down to (0-8) integers
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}

function setMole() {

  if(gameOver){
    return;
  }
  if (currMoleTile) {
    currMoleTile.innerHTML = "";
  }
  let mole = document.createElement("img"); // Added closing parenthesis
  mole.src = "./monty-mole.png";

  let num = getRandomTile();
  if(currPlantatile && currPlantatile.id == num){
    return;
  }
  currMoleTile = document.getElementById(num);
  currMoleTile.appendChild(mole);
}

function setPlant() {
  if(gameOver){
    return;
  }

  if (currPlantatile) { // Fixed typo, use currPlantatile
    currPlantatile.innerHTML = ""; // Use currPlantatile here
  }

  let plant = document.createElement("img"); // Added closing parenthesis
  plant.src = "./piranha-plant.png";

  let num = getRandomTile();
  if(currMoleTile && currMoleTile.id == num){
    return;
  }
  currPlantatile = document.getElementById(num);
  currPlantatile.appendChild(plant);
}

function selectTile(){
  if(gameOver){
    return;
  }
  if(this == currMoleTile){
    score += 10;
    document.getElementById("score").innerText = score.toString(); //update the score
  }else if(this == currPlantatile){
    document.getElementById("score").innerText = "GAME OVER: " + score.toString();
    gameOver = true;
  }
}