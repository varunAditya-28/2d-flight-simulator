class Form {

constructor(){
this.title = createElement("h1")
this.instruction = createElement("h2")
this.button = createButton("Click To Start")
this.image = loadImage("flight.png")
}

display(){
image(this.image,0,0,displayWidth,displayHeight);
this.title.html("VARUN'S GAME")
this.title.position(displayWidth/2,100)
this.instruction.html("VARUN'S INSTRUCTION")
this.instruction.position(displayWidth/2,200)
this.button.position(displayWidth/2,250)
//display the button
this.button.mousePressed(()=>gameState = play)


}
}