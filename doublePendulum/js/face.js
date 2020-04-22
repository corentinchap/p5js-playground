class Face {

    constructor(x,y,currentImage, increment){
        this.increment = parseFloat(increment);
        this.x = x;
        this.y = y;
        this.currentImage = currentImage;
 
    }
    show(){
        image(this.currentImage,this.x,this.y);
    }
}