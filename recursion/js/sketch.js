
let randomVal;

function setup() {
  // put setup code here
  canvasWidth = document.getElementById('p5Container').offsetWidth;
  canvasHeight = document.getElementById('p5Container').offsetHeight;
  let canvas = createCanvas(canvasWidth,canvasHeight);

  canvas.parent('p5Container');
  currentFace = loadImage("../assets/faces/" + 'coco.png');
  randomVal = random(0.1,0.8);
  
  
}



function changeFace(){
  let face = document.getElementById('faceSelect').value;
  currentFace = loadImage("../assets/faces/" + face + '.png');
  calcOffset();
}


function draw() {
  background(255)
  let ncol = 6;
  let nline = 6;
  let positions = [];
  for(let i=0;i < nline; i++){
    for(let y=0; y < ncol;y++){
      positions.push(
        {
          x: canvasWidth / (ncol - i),
          y: canvasHeight / (nline - y)
        }
      )
      image(currentFace, canvasWidth / (ncol - i),canvasHeight / (nline - y))
    }
  }
  console.log(positions)  
  
}

function drawEllipse(x,y,d){
  ellipse(x,y,d);
  if(d > 2){
    let newD = d * randomVal;
    drawEllipse(x+newD*0.5, y, d*0.5);
    drawEllipse(x, y + newD, d*0.5);
    //fill(random(255),random(255),random(255))
   // drawEllipse(x-d*0.5 , y, d*0.5);
 
  }
}
