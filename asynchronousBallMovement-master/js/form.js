class Form {
    constructor(){
        this.Button = createButton('CLICK HERE')
        this.info = createInput('Full name here');
     
    }
    
    display(){
        var title = createElement('h1')
        title.position(250,100);
        title.html("Car racing championship");
        this.Button.position(260,250);
        this.info.position(255,200);

        this.Button.mousePressed(()=>{
            this.Button.hide();
            this.info.hide();
            playerCount++ 
            player.index = playerCount
            player.name = this.info.value();
            player.updateName();
            player.updatecount(playerCount);
        })
    }
}