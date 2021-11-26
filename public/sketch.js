var t = 0
function RainDrop(l, speed) {
  this.l = l
  this.speed = speed
  this.x = random(0, width)
  this.y = random(0, height)
  this.update = function () {
    this.y += this.speed
    this.x += noise(t)
    if (this.y >= height) {
      this.y = 0
    }
    if (this.x >= width) {
      this.x = 0
    }
  }
  this.show = function () {
    line(this.x, this.y, this.x, this.y - l)
  }
}

function setup() {

  // default canvas size
  const width = window.innerWidth;
  const height = window.innerHeight;
  let cnv = createCanvas(width, height);
  cnv.position(0, 0);

  // raindrops
  layers = []
  for (i = 0; i < 7; i++) {
    layers[i] = []
    for (ii = 0; ii < 300; ii++) {
      rd = new RainDrop(2 * i, i + 1)
      layers[i].push(rd)
    }
  }
  t += 0.001


}

//wave constant
let yoff = -1.0;

// const humidityHeight = 0.5;
const humidityHeight = localStorage.setItem("humidityHeight", 0.5);

function draw() {

  let temp = localStorage.getItem("temperature") // 25

  // red   (255, 0,   0, 255)
  // green (0,   255, 0, 255)
  // blue  (255, 255, 0, 255)
  //          255           255        255       
  background(temp * 10 - 250, temp * 10, temp * 5 - 150, 255);

  // raindrops
  for (i = 0; i < layers.length; i++) {
    for (ii = 0; ii < layers[i].length; ii++) {
      layers[i][ii].update()
      layers[i][ii].show()
    }
  }
  // wave
  // We are going to draw a polygon out of the wave points
  fill("#0000F7");
  beginShape();

  let xoff = 0; // Option #1: 2D Noise
  // let xoff = yoff; // Option #2: 1D Noise

  // Iterate over horizontal pixels
  for (let x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to

    // Option #1: 2D Noise
    let y = map(noise(xoff, yoff), 0, 1, 200, 250);

    // Option #2: 1D Noise
    // let y = map(noise(xoff), 0, 1, 200, 300);

    // Set the vertex
    vertex(x, y / localStorage.getItem("humidityHeight"));                                       // height of the wave
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.025;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}
