class BaseClass{
    constructor(x,y,w,h){
        this.width=w;
        this.height=h;
        this.body=Bodies.rectangle(x,y,w,h);
        this.image = loadImage("images/base.png");
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        angleMode(RADIANS);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}