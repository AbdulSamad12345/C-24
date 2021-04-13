class Box{

    constructor(x,y,w,h){

    this.height=h
    this.width=w

    var box_opt = {
        friction:0.3,
        density:1,
        restitution:0.8
    }
    this.box=Bodies.rectangle(x,y,w,h,box_opt);

    World.add(world,this.box);

    }

    display(){

        var pos=this.box.position
        var angle=this.box.angle
        push()
        translate(pos.x,pos.y);
        rotate(angle);

        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        pop()
        

        
    }




}