let currentFace;
let currentImage;
let increment = 0.02;
let enableChemtrails = true;
let container;

function preload(){
  container = document.getElementById('p5Container');
  currentImage = loadImage("../assets/faces/coco.png");
  currentFace = new Face(
    random(container.clientWidth),
    random(container.clientHeight),
    currentImage,
    increment);
}

function setup() {
  // put setup code here
  let canvas = createCanvas(container.clientWidth, container.clientHeight);
  canvas.parent('p5Container');
  document.getElementById('increment').addEventListener('change',updateIncrement)
  document.getElementById('noisedetail').addEventListener('change',updateDetail)
}

function updateIncrement(){
  increment = document.getElementById('increment').value;
  document.getElementById('currentIncrement').innerHTML = increment;
  currentFace.updateIncrement(increment);
}

function updateDetail(){
  detail = document.getElementById('noisedetail').value;
  document.getElementById('currentNoiseDetail').innerHTML = detail;
  noiseDetail(detail);
}


function changeFace(){
  let face = document.getElementById('faceSelect').value;
  currentFace = new Face(
    random(container.clientWidth),
    random(container.clientWidth),
    loadImage("../assets/faces/"+face+".png"),
    increment);
}

function mousePressed(){
  currentFace.clicked();
}

function toggleChemtrails(){
  enableChemtrails=!enableChemtrails;
}


function draw() {
  if(!enableChemtrails)
    background(255);
  
  currentFace.move();
  currentFace.show();
  
}
