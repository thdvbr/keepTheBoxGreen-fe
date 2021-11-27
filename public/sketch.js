/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
let angle = 0;

let poop;
let cam;
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  20, 21, 22, 23, 24, 25, 26, 27, 28, 29]

function preload() {
  poop = loadImage("/assets/poop-emoji.jpg");
}


function setup() {
  // default canvas size
  const width = window.innerWidth;
  const height = window.innerHeight;
  let cnv = createCanvas(width, height, WEBGL);
  cnv.position(0, 0);
  cam = createCapture(VIDEO);
}

function draw() {
  background(175);
  rectMode(CENTER);
  noStroke();
  
  push();
  // mouseX - CENTER OF THE WINDOW
  let dx = mouseX - width / 2;
  let dy = mouseY - height / 2;
  let v = createVector(dx, dy, 0);
  v.normalize();
  // ambient Material reflects light 
  // ambientLight(0, 0, 255);
  // pointLight(255, 255, 0, -200, 0, 0);
  // directionalLight(255, 255, 0, dx, dy, 0);

  // ambient light and directional light mixes with each other and blue from ambient light
  // and yellow and green from directional light becomes white on blue 
  const sittingTime = localStorage.getItem("sittingTime");
  ambientLight(sittingTime * 10, 255 - sittingTime * 3, 0);
  directionalLight(0, 0 , sittingTime * 10 + 50, v);
  // pointLight(sittingTime * 10 , 0, 0, 200 - sittingTime * 5, 255, 0);
 
  // normalMaterial();
  // functions run sequential
  // translate(mouseX - width/2 , mouseY - height/2);

  // use mouseX to translate along Z 
  translate(mouseX - width / 2, mouseY - height / 2, 0);
  rotateZ(angle);
  rotateY(angle * 0.5);
  rotateX(mouseX * 0.01 );
  // rect(0, 0, 150, 150);
  // width, height, depth
  
  // box(100, 20, 50);
  sphere(sittingTime * 7);
  // ambientMaterial(255);
  texture(cam);
  pop();
  push();
  // sphere(100);

  angle += 0.03;

  translate(240, 0, 0);

  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  // cylinder(70, 70);
  texture(poop);
  box(50, 50);
  pop();



}
