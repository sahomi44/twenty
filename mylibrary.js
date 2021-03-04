function IsTouching(wall,car){
  if(
  (Object1.X = Object2.X < Object2.width/2 + Object1.width/2)
  &&(Object2.X = Object1.X < Object2.width/2 + Object1.width/2)
  &&(Object1.Y = Object2.Y < Object2.height/2 + Object1.height/2)
  &&(Object2.Y = Object1.Y < Object1.height/2 + Object2.height/2)
  )
       {
  Object1.shapcolor = "green";
  Object2.shapcolor = "green";
   }
  elase
  {
    Object2.shapcolor = "red";
    Object1.shapcolor = "blue";
      }
  }
    {
function bounceoff (Object1,object2){

  
  if(
    (Object1.X = Object2.X < Object2.width/2 + Object1.width/2)
    &&(Object2.X = Object1.X < Object2.width/2 + Object1.width/2)
  )
Object2.velocityX = (-1) * Object2.velocityX;
  
    }
    }
