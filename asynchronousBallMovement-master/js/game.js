class Game {
    constructor(){}


    readState(){
        database.ref('gameState').on("value",function(data){
          gameState = data.val()
        }); 
        
    }
    updatestate(state){
     database.ref('/').update({gameState:state})    
    } 
    start(){
        if(gameState == 0){
            player = new Player();
            player.readcount();
            form = new Form();
            form.display();
        }
    
    }
    play(){
       text('The championship begins!!',250,50);
       Player.readInfo();
       
       if(allplayer!= undefined){
        var xpos = 200;
         for(var i in allplayer){
             text(allplayer[i].Playername,xpos,100);
             xpos = xpos+100;
         }
       }
  
    }
}


