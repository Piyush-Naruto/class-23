class ground{
 contructor(){
    var options = {isStatic:true}
    this.body = body.rectangle(x,y,width,height,options)
    this.width = width;
    this.height = height;
    world.add (world,this.body);
}
  display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill(255);
      rect(pos.x,pos.y,this.width,this.height)
  }
}