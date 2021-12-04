class Snow{
    constructor(x, y, r) {
        var options = {
            'restitution':0.8,
            'friction':2,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, r/2, options);
        this.r = r;
        
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
      }
}