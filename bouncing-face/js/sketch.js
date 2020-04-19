let currentFace;
let faceX = 0;
let faceY = 0;
let speedX = 3;
let speedY = 3;
let offsetX;
let offsetY;
let enableChemtrails = true;
let canvasWidth = 0;
let canvasHeight = 0;
let speedIncrement = 3;
let canvasArray = new Array();

function calcOffset() {
  offsetX = currentFace.canvas.width/2;
  offsetY = currentFace.canvas.height/2;
}

function toggleChemtrails(){
  enableChemtrails=!enableChemtrails;

  newCanvas = createGraphics(canvasWidth, canvasHeight);
  newCanvas.clear();
  canvasArray.push(newCanvas);
}

function setup() {
  // put setup code here
  canvasWidth = document.getElementById('p5Container').offsetWidth;
  canvasHeight = document.getElementById('p5Container').offsetHeight;
  let canvas = createCanvas(canvasWidth,canvasHeight);

  canvas.parent('p5Container');
  currentFace = loadImage("../assets/faces/" + 'coco.png');
  calcOffset();
  faceX = random(canvasWidth - offsetX);
  faceY = random(canvasHeight - offsetY);
  console.log(this)
}

function changeFace(){
  let face = document.getElementById('faceSelect').value;
  currentFace = loadImage("../assets/faces/" + face + '.png');
  calcOffset();
}


function draw() {
  
  

  if(faceY > canvasHeight - currentFace.canvas.width){
    speedY = -speedIncrement;
  }
  if(faceY < 0){
    speedY = speedIncrement;
  }
  if(faceX > canvasWidth - currentFace.canvas.height){
    speedX = -speedIncrement;
  }
  if(faceX < 0){
    speedX = speedIncrement;
  }
  
  faceX += speedX;
  faceY += speedY;
  
  if(enableChemtrails){
    image(currentFace, faceX , faceY);
  }
  else{
    let lastestCanvas = canvasArray[canvasArray.length -1 ];
    
    lastestCanvas.background(255);
    lastestCanvas.image(currentFace, faceX , faceY);
    image(lastestCanvas,0,0); 
  }
  
   
    
}
