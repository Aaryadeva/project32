class Box3 {
    constructor(x, y, width, height){
      var options={
        friction:0.1,
        restitution:0.8
      }
      this.body3=Bodies.rectangle(x,y,width,height,options)
      this.width=width
      this.height=height
      this.Visibility = 255;
      
      World.add(world,this.body3)
    }
    scoreIncrease(){
      if(this.Visibility<0&&this.Visibility>-105){
        score++
      }
    }
    display(){
      //console.log(this.body3.speed)
      if(this.body3.speed < 3){
      var pos =this.body3.position;
      var angle = this.body3.angle;
      push();
     // translate(this.body3.position.x, this.body3.position.y);
      rotate(angle)
      rectMode(CENTER)
      rect(this.body3.position.x,this.body3.position.y,this.width,this.height)
      fill(51,240,79);
      pop();
      }
      else{
        World.remove(world, this.body3);
        push();
        this.Visibility = this.Visibility - 5;
        tint(255,this.Visibility);
        pop();
      }
    }
  }