/*class Dustbin{
    constructor(x, y, width, height) {
      var options = {
         'isStatic':true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };*/
  class Dustbin
{
	constructor(x,y,w,h,thickness)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=w;
		this.dustbinHeight=h;
		this.wallThickness=thickness;
		
		this.image=loadImage("bin.png");
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		
		

		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			

			push();
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER);
			//strokeWeight(4);
			angleMode(RADIANS);
			fill(255);
			rotate(this.angle);
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			pop();

			push();
			translate(posRight.x, posRight.y);
			rectMode(CENTER);
			//strokeWeight(4);
			angleMode(RADIANS);
			fill(255);
			rotate(-1*this.angle);
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			pop();

			push();
			translate(posBottom.x, posBottom.y+10);
			rectMode(CENTER);
			//strokeWeight(4);
			angleMode(RADIANS);
			fill(255);
			imageMode(CENTER);
			image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight);
			//rect(0,0,this.dustbinWidth, this.wallThickness);
			pop();
			
	}

}
  