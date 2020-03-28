class Form {
    constructor() {
    this.title = createElement('h2');
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
    display(){

      this.title.html("Car Racing Game");
      this.title.position(displayWidth/2 - 50, 0);
      
      
      this.input.position(displayWidth/2 - 50, displayHeight/2 - 40);
      this.button.position(displayWidth/2 + 50, displayHeight/2 + 40);
  
      this.button.mousePressed(function(){
        this.input.hide();
        this.button.hide();
  
        player.name = this.input.value();
        
        playerCount+=1;
        player.update()
        player.updateCount(playerCount);
        this.greeting.html("Hello " + name )
        this.greeting.position(displayWidth/2, displayHeight/4);
      });
  
    }
  }