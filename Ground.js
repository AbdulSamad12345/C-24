class Ground{

 constructor(){
 var ground_opt = {
    isStatic:true
  }
 this.ground = Bodies.rectangle(300,570,600,100,ground_opt);

 World.add(world,this.ground);


 }

 display(){
    rectMode(CENTER);
    rect(this.ground.position.x,this.ground.position.y,600,100);

 }




}




