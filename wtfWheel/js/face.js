class Face {

    constructor(x,y,currentImage){
        this.x = x;
        this.y = y;
        this.currentImage = currentImage;
 
    }
    show(){
        angleMode(DEGREES)
        rotate(random(5));
        image(this.currentImage,this.x,this.y);
    }
}