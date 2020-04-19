let currentFace;

(function(){
  var audio = new Audio('jonathan.mp3');
  audio.play();
})()

function setup() {
  // put setup code here
  let canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent('p5Container');
  currentFace = loadImage('coco.png');
}


function changeFace(){
  let face = document.getElementById('faceSelect').value;
  console.log(face);
  currentFace = loadImage(face + '.png');
}


function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  image(currentFace, mouseX - currentFace.canvas.width/2, mouseY - currentFace.canvas.height/2)  
}
