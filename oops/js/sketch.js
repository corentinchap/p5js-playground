
let inc = 1;
let positions = [];
let ncol =30;
let nline = 12;

function setup() {
  // put setup code here
  canvasWidth = document.getElementById('p5Container').offsetWidth;
  canvasHeight = document.getElementById('p5Container').offsetHeight;
  let canvas = createCanvas(canvasWidth,canvasHeight);
  imageMode(CENTER);
  canvas.parent('p5Container');
  currentFace = loadImage("../assets/faces/" + 'coco.png');
  registerControls();
}

function registerControls(){
  
  document.getElementById('col').addEventListener("change",(e)=>{
    ncol = e.target.value
    document.getElementById('currentCol').innerText = e.target.value;
  })
  document.getElementById('row').addEventListener("change",(e)=>{
    nline = e.target.value
    document.getElementById('currentRow').innerText = e.target.value;
  })
}

function changeFace(){
  let face = document.getElementById('faceSelect').value;
  currentFace = loadImage("../assets/faces/" + face + '.png');
}


function draw() {
  
  for(let i=0;i<canvasWidth;i=i+1){
    translate( (currentFace.width/2)*i, (currentFace.height/2)*i)
    rotate(inc);
    image(currentFace,currentFace.width*i,currentFace.height*i);
    inc += 0.01;
  }
}
