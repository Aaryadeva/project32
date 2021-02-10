class Box4 {
    constructor(x, y, width, height){
      var options={
        friction:0.1,
        restitution:0.8
      }
      this.body=Bodies.rectangle(x,y,width,height,options)
      this.width=width
      this.height=height
      this.Visibility = 255;
      World.add(world,this.body)
    }
    
    display(){
      if(this.body.speed < 5){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
     // translate(this.body.position.x, this.body.position.y);
      rotate(angle)
      rectMode(CENTER)
      rect(this.body.position.x,this.body.position.y,this.width,this.height)
      fill(51,240,79);
      pop();
      }
      else{
        World.remove(world, this.body);
        push();
        this.Visibility = this.Visibility - 5;
        tint(255,this.Visibility);
        pop();
      }
    }
    scoreIncrease(){
      if(this.Visibility<0&&this.Visibility>-105){
        score++
      }
    }
  }