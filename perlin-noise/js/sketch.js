let currentFace;
let currentImage;
let increment = 0.005;
let enableChemtrails = true;
let container;  // shared with face.js
let copains = [];

function preload(){
  currentImage = loadImage("../assets/faces/coco.png");
}

function setup() {
  // put setup code here
  container = {
    clientHeight: window.innerHeight - document.getElementsByTagName('header')[0].clientHeight,
    clientWidth: window.innerWidth
  }
  console.log(container)

  let canvas = createCanvas(container.clientWidth, container.clientHeight);
  canvas.parent('p5Container');

  
  document.getElementById('increment').addEventListener('change',updateIncrement);
  document.getElementById('noisedetail').addEventListener('change',updateDetail);
  
  copains.push(new Face(
    random(container.clientWidth),
    random(container.clientHeight),
    currentImage,
    increment));
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


function addFace(){
  let face = document.getElementById('faceSelect').value;
  copains.push(new Face(
    random(container.clientWidth),
    random(container.clientWidth),
    loadImage("../assets/faces/"+face+".png"),
    increment,
    random(1000,10000)));
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
  
 copains.forEach(face => {
  face.move();
  face.show();
 });
  
}
