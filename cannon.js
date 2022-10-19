class Cannon{
    constructor(x,y,w,h,angle){
        this.x = x; this.y=y, this.w=w; this.h=h; this.angle=angle;
        this.image=loadImage("./assets/cannonBase.png");
        this.image1=loadImage("./assets/canon.png");
    }

    display(){
        image(this.image1,50,30,200,200)
        image(this.image,this.x,this.y,this.w,this.h)
       noFill()
    }
}