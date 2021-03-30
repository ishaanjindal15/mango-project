class Slingshot{
    constructor(bodyA,pointB){
        var options={
        stiffness: 0.04,
        length:10,
        bodyA:bodyA,
        pointB:pointB,


        }
this.slingshot= Matter.Constraint.create(options)
World.add(world,this.slingshot)

    }
display(){
  if (this.slingshot.bodyA)  
  {
      var pointA= this.slingshot.bodyA.position
      var pointB= this.slingshot.pointB
      strokeWeight(5)
      line(pointA.x,pointA.y,pointB.x,pointB.y)

  }
}
    fly(){
        this.slingshot.bodyA= null
    }
    attach(stone){
this.slingshot.bodyA= stone;
    }
}
