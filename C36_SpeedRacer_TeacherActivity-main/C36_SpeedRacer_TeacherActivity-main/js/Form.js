class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }
  elementspos(){
    this.input.position(width/2-100, height/2-80);
    this.playButton.position(width/2-100, height/2-20);
    this.titleImg.position(width/2-820, 150);
    this.greeting.position(width/2-300, height/2-80);
  }
  elementstyle(){
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.titleImg.class("gameTitle");
    this.greeting.class("greeting");
  }
  display(){
  this.elementspos()
  this.elementstyle()
  this.handleMousepressed()
  }
handleMousepressed(){
  this.playButton.mousePressed(()=>{
    this.playButton.hide();
    this.input.hide();
    var msg="Please Wait FOr Other People To Join";
    this.greeting.html(msg);
  })
}
}
