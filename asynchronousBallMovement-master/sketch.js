var ball;
var database;
var position;
var gameState = 0;
var playerCount;
var form,game,player;
var allplayer;
function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game = new Game();
    game.readState();
    game.start();
    
}

function draw(){
    background("white");
    if(playerCount==4){
        //console.log("hi",playerCount,gameState);
        gameState = 1;
        game.updatestate(1);
    }
  if (gameState == 1 ){
      game.play();
  } 
}




