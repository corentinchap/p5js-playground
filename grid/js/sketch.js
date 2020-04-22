
let randomVal;
let positions = [];
let ncol =30;
let nline = 12;

function setup() {
  // put setup code here
  canvasWidth = document.getElementById('p5Container').offsetWidth;
  canvasHeight = document.getElementById('p5Container').offsetHeight;
  let canvas = createCanvas(canvasWidth,canvasHeight);

  canvas.parent('p5Container');
  currentFace = loadImage("../assets/faces/" + 'coco.png');
  randomVal = random(0.1,0.8);
  
 
  for (var i = 0; i < ncol; i++) { 
    positions[i] = []; 
    for(var j=0; j < nline;j++){
      positions[i][j] = [];
    }
  }

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
  //calcOffset();
}


function draw() {
  background(255)

  for(let i=0;i < nline; i++){
    for(let j=0; j < ncol;j++){
      // positions[i][j] = {
      //   x: canvasWidth / 50*(ncol - i), 
      //   y: canvasHeight / 50*(nline - j)
      // };
   
      // console.log(canvasWidth / ncol * j)
      // console.log(canvasHeight / nline * i)
      //console.log(positions[i][j]);
      image(currentFace, 
        canvasWidth / ncol * j, 
        canvasHeight / nline * i
      )
    }
  } 
  //noLoop()
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
