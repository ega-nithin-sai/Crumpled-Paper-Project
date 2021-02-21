class Paper{
    constructor(x,y,w,h){
        this.width=w;
        this.height=h;
        this.body=Bodies.rectangle(x,y,w,h);
        this.image = loadImage("paper.png");
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

        if(keyWentDown("space")){
            Body.applyForce( this.body, {x: this.body.position.x, y: this.body.position.y}, {x: 0.29, y: -0.45});
        }
    }
}