let currentFace;
let isAudioPlaying = false;

function startSong() {
  if(!isAudioPlaying){
    var audio = new Audio('jonathan.mp3');
    audio.play();
    isAudioPlaying = true;
  }
}

function setup() {
  // put setup code here
  let canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent('p5Container');
  currentFace = loadImage("../assets/faces/" + 'coco.png');
}


function changeFace(){
  let face = document.getElementById('faceSelect').value;
  currentFace = loadImage("../assets/faces/" + face + '.png');
}


function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  image(currentFace, mouseX - currentFace.canvas.width/2, mouseY - currentFace.canvas.height/2)  
}
