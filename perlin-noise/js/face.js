class Face {

    xoff1 = 0;
    xoff2 = 1000;  
    increment = 0;

    constructor(x,y,currentImage, increment){
        this.increment = parseFloat(increment);
        this.x = x;
        this.y = y;
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
        this.x = map(noise(this.xoff1),0,1,0,canvas.width);
        this.y = map(noise(this.xoff2),0,1,0,canvas.height);

        this.xoff1 += this.increment;
        this.xoff2 += this.increment;
    }
    show(){
        colorMode(HSB, 255);
        let c = color(0, 126, 255);
        
        let value = saturation(c); // Sets 'value' to 126
        fill(value);
        image(this.currentImage,this.x,this.y);
    }
}