class Paper{
    constructor(x, y){
    var options = {
        isStatic:false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.0
    }    
    this.body = Bodies.circle(x, y, 50, options)
    this.image = loadImage("ball.png")
    World.add(world, this.body)

    }
    
    display(){
        var pos =this.body.position;
      imageMode(CENTER);
      fill("lightgreen");
      image(this.image,pos.x,pos.y, 50,50);
      
      }
}