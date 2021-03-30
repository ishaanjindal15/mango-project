class Stone {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          resitution:0,
          fricton:1,
          density:1.2
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image= loadImage("images/stone.png")
    }
    display(){
      var pos =this.body.position;
    //  rectMode(CENTER);
      //fill("brown");
      //rect(pos.x, pos.y, this.width, this.height);
      imageMode(CENTER)
      image(this.image,pos.x, pos.y, this.width, this.height)
    }
  };