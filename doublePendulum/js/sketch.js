let extraCanvas;
let g = 1; //gravity
let r1 = 125; // first arm length
let r2 = 125; // second arm length
let m1 = 10; // mass of the first pendulum
let m2 = 10; // mass of the second pendulum
let a1 = 0; // default angle pendulum 1
let a2 = 0; // default angle pendulum 2
let a1_v = 0;
let a2_v = 0;
let hidePendulum = true;
let faceSizeFactor1 = 1;
let faceSizeFactor2 = 1;
let randomColor = false;

function setup() {
  pixelDensity(1);
  a1 = PI/2;
  a2 = PI/2;
  // put setup code here
  canvasWidth = document.getElementById('p5Container').offsetWidth;
  canvasHeight = document.getElementById('p5Container').offsetHeight;
  let canvas = createCanvas(canvasWidth,canvasHeight);
  extraCanvas = createGraphics(canvasWidth,canvasHeight);
  extraCanvas.clear();
 

  canvas.parent('p5Container');
  currentFace = loadImage("../assets/faces/" + 'coco.png');

  registerControls();
}

function registerControls(){
  document.getElementById('r1').addEventListener("change",(e)=>{
    r1 = e.target.value
    document.getElementById('r1_val').innerText = e.target.value;
  })
  document.getElementById('r2').addEventListener("change",(e)=>{
    r2 = e.target.value
    document.getElementById('r2_val').innerText = e.target.value;
  })
  document.getElementById('g').addEventListener("change",(e)=>{
    g = e.target.value
    document.getElementById('g_val').innerText = e.target.value;
  })
  document.getElementById('m1').addEventListener("change",(e)=>{
    m1 = e.target.value
    document.getElementById('m1_val').innerText = e.target.value;
  })
  document.getElementById('m2').addEventListener("change",(e)=>{
    m2 = e.target.value
    document.getElementById('m2_val').innerText = e.target.value;
  })
  document.getElementById('show_pendule').addEventListener("change",(e)=>{
    hidePendulum = !hidePendulum;
  })
  document.getElementById('faceSizeFactor1').addEventListener("change",(e)=>{
    faceSizeFactor1 = e.target.value
    document.getElementById('faceSizeFactor1_val').innerText = e.target.value;
  })
  document.getElementById('faceSizeFactor2').addEventListener("change",(e)=>{
    faceSizeFactor2 = e.target.value
    document.getElementById('faceSizeFactor2_val').innerText = e.target.value;
  })
  document.getElementById('randomColor').addEventListener("change",(e)=>{
    randomColor = !randomColor
  })
}


function changeFace(){
  let face = document.getElementById('faceSelect').value;
  currentFace = loadImage("../assets/faces/" + face + '.png');
  //calcOffset();
}
function clearCanvas(){
  background(255);
  extraCanvas.background(255);
}

function draw() {
  background(255);
  image(extraCanvas,0,0);

  
  stroke(0);
  strokeWeight(4);
  extraCanvas.stroke(0);
  extraCanvas.strokeWeight(4);
 
  translate(canvasWidth/2, canvasHeight/2);

  let num1 = -g * (2 * m1 + m2) * sin(a1);
  let num2 = -m2 * g * sin(a1 - 2 * a2);
  let num3 = -2 * sin(a1 - a2) * m2;
  let num4 = a2_v * a2_v * r2 + a1_v * a1_v * r1 * cos(a1 - a2);
  let den = r1 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
  let a1_a = (num1 + num2 + num3 * num4) / den;

  num1 = 2 * sin(a1 - a2);
  num2 = a1_v * a1_v * r1 * (m1 + m2);
  num3 = g * (m1 + m2) * cos(a1);
  num4 = a2_v * a2_v * r2 * m2 * cos(a1 - a2);
  den = r2 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
  let a2_a = (num1 * (num2 + num3 + num4)) / den;  


  let x1 = r1 * sin(a1);
  let y1 = r1 * cos(a1);

  let x2 = r2 * sin(a2) + x1;
  let y2 = r2 * cos(a2) + y1;


  if(!hidePendulum){
    line(0,0,x1,y1);
    line(x1,y1, x2,y2);
  }
  

  a1_v += a1_a;
  a2_v += a2_a;
  a1 += a1_v;
  a2 += a2_v;

  let face1Width = currentFace.width* faceSizeFactor1;
  let face1Height = currentFace.height* faceSizeFactor1;
  let face2Width = currentFace.width* faceSizeFactor2;
  let face2Height = currentFace.height* faceSizeFactor2;
  //colorMode(HSB, 255);
  extraCanvas.push();
  extraCanvas.translate(canvasWidth/2, canvasHeight/2);
  if(randomColor){
    extraCanvas.tint(color(random(255), random(255), random(255)))
  }
  extraCanvas.image(currentFace,x1-face1Width/4,y1-face1Height/4,face1Width,face1Height);
  
  if(randomColor){
    extraCanvas.tint(color(random(255), random(255), random(255)))
  }
  extraCanvas.image(currentFace,x2-face2Width/2,y2-face2Height/2, face2Width,face2Height);
  extraCanvas.pop();

}
