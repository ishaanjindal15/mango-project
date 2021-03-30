class Mango{
    constructor(x,y){
        var options={
            isStatic:true,
            frictio:1,
            restitution:0,
        }
    this.body=Bodies.circle(x,y,20,options)
    this.radius=40;
    World.add(world,this.body);    
    this.image= loadImage("images/mango.png")
    }
    
    display(){
    var pos= this.body.position;
    push();
    translate(pos.x,pos.y)
    // ellipseMode(RADIUS)
    // fill("pink")
    // ellipse(0,0,20)
    imageMode(CENTER)
    image(this.image,0,0,50,50)
     pop();
    }
    }