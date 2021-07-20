class Game{

constructor(){

}

play(){
form.hide();

    if (keyDown(UP_ARROW)){
        flight.y = flight.y - 2;
      }
    
      if(keyDown(DOWN_ARROW)){
        flight.y = flight.y + 2;
        }  

         if(bg.x < 0){
             bg.x = displayWidth/4;
         }

         spawnClouds();
        if(cloudsGroup.isTouching(flight)){
            cloudsGroup.setLifetimeEach(-1)
            gameState = "end";
        }
        score = score + Math.round(frameCount/60)
        stroke("black")
        textSize(20)
        
        drawSprites();
        text("score : "+ score,50,50)
}

       end(){
       bg.velocityX = 0;
       bg.addImage(bg_blast_img)
       cloudsGroup.setVelocityXEach(0);
       flight.addImage(flightBlastImg)
       flight.scale = 2
       drawSprites();
       }


}

