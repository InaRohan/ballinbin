class Ground {
    constructor(x,y,w,h,color) {
      let options = {
          isStatic: true,
        //  friction: 1
      };
      this.body=Bodies.rectangle(x,y,w,h,options);
      this.w=w;
      this.h=h;
      this.x=x;
      this.y=y;
      this.color=color;
      World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        noStroke();
        fill(this.color);
        rect(pos.x, pos.y, this.w, this.h);   
    }
}