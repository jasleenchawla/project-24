class PaperClass{
    constructor(x, y, radius){
        var options ={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = bodies.ellipse(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){

    var pos = this.body.position
    
    push();
    ellipseMode(CENTER)
    ellipse(pos.x,pos.y,this.body.radius);
    pop();

        
    }
}