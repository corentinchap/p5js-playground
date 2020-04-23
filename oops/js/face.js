class Face {
    curRotate = 0;
    constructor(x,y,currentImage){
        this.x = x;
        this.y = y;
        this.currentImage = currentImage;
        angleMode(DEGREES)
    }
    show(){
        image(this.currentImage,this.x,this.y, this.currentImage.width, this.currentImage.height);
    }
    spin(speed){
        this.curRotate += speed;
        rotate(this.curRotate);  
        image(this.currentImage,this.x,this.y, this.currentImage.width, this.currentImage.height);
    }
}