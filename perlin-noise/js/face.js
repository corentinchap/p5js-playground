class Face {

    xoff1 = 0;
    xoff2 = 1000;  
    increment;
    offset;

    constructor(x,y,currentImage, increment, offset){
        this.increment = parseFloat(increment);
        this.x = x;
        this.y = y;
        this.offset = offset || 0;
        this.currentImage = currentImage;
 
    }
   
    updateIncrement(inc){
        this.increment = parseFloat(inc);
    }

    clicked(){
        let distance = dist(this.x+this.currentImage.width/2,
            this.y+this.currentImage.height/2,
            mouseX, mouseY)
        if(distance < this.currentImage.width)
            alert('Bravo Michel !')
    }

    move(){
        this.x = map(noise(this.xoff1+this.offset),0,1,0,container.clientWidth);
        this.y = map(noise(this.xoff2),0,1,0,container.clientHeight);

        this.xoff1 += this.increment;
        this.xoff2 += this.increment;
    }
    show(){
        console.log(this)
        image(this.currentImage,this.x,this.y);
    }
}