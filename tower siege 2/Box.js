class Box {
  constructor(x, y, width, height){
    var options={
      friction:0.1,
      restitution:0.8
    }
    this.body4=Bodies.rectangle(x,y,width,height,options)
    this.width=width
    this.height=height
    this.Visibility = 255;
    World.add(world,this.body4)
  }
  scoreIncrease(){
    if(this.Visibility<255&&this.Visibility>-105){
      score++
    }
  }
  display(){
    if(this.body4.speed < 3){
    var pos =this.body4.position;
    var angle = this.body4.angle;
    push();
   // translate(this.body.position.x, this.body.position.y);
    rotate(angle)
    rectMode(CENTER)
    rect(this.body4.position.x,this.body4.position.y,this.width,this.height)
    fill(51,240,79);
    pop();
    }
    else{
      World.remove(world, this.body4);
      push();
      this.Visibility = this.Visibility - 5;
      tint(255,this.Visibility);
      pop();
    }
  }
}