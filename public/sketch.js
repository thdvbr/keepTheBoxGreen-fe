// time counter
let t = 0

function createBall(speedX, speedY) {
  return {
    x: random(10),
    y: random(10),
    dirX: random(100),
    dirY: random(100),
    speedX: random(2),
    speedY: random(2),
    size: random(0, 1),
    color: [0, 0, 0, random(255)],
    weight: random(1, 10),
  };
}

function processBall(b, particleNum) {
  // Process a ball, dealing with movement and bouncing
  b.x = b.x + b.speedX * b.dirX;
  b.y = b.y + b.speedY * b.dirY;

  if (b.x > width / 2) {
    b.dirX = -1;
  } else if (b.x < -width / 2) {
    b.dirX = 1;
  }

  if (b.y > height / 2) {
    b.dirY = -1;
  } else if (b.y < -height / 2) {
    b.dirY = 1;
  }

  fill(b.color, 10);
  strokeWeight(b.weight / 2);
  stroke(b.color);
  rect(b.x, b.y, b.size);
}

let particles = []; // array to hold particle objects

// particle class
function particle() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 4 * PI);
  this.size = random(5, 10);

  // radius of particle spiral
  // chosen so the particles are uniformly spread out in area
  this.radius = sqrt(random(pow(width * 10 / 1, 2)));

  this.update = function (time) {
    // x position follows a circle
    let w = 0.5; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size particles fall at slightly different y speeds
    this.posY += sin(this.size, 0.2);

    // delete particle if past end of screen
    if (this.posY > height) {
      let index = particles.indexOf(this);
      particles.splice(index, 1);
    }
  };

  this.display = function () {
    rect(this.posX, this.posY, this.size);
  };
}

function preload() {
  img = loadImage('https://upload.wikimedia.org/wikipedia/commons/c/c2/Coronavirus_icon.svg')
}

function setup() {

  // default canvas size
  const width = window.innerWidth;
  const height = window.innerHeight;
  let cnv = createCanvas(width, height);
  cnv.position(0, 0);

  // particle
  ballList = [];
  // const particle = localStorage.getItem("particle");
  const ballNumber = Array.from(Array(500).keys())
  for (let i of ballNumber) {
    ballList.push(createBall());
  }

  image(img, 10, 10, 50, 50);


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
  background((temp * 10 - 200), (temp * 5), (temp * 5 - 100), 255);

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
    vertex(x, y / localStorage.getItem("humidityHeight") * 2);                                       // height of the wave
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.015;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

  // particle
  fill(0, 0, 0, random(255));
  const particleNum = localStorage.getItem("particle");
  // translate(width / 2, height / 2);
  // for (let b of ballList) {
  //   processBall(b);
  // }

  let t = frameCount / 60; // update time
  // create a random number of particle each frame
  for (let i = 0; i < particleNum / 100; i++) {
    particles.push(new particle()); // append particle object
  }
  // loop through particles with a for..of loop
  for (let particle of particles) {
    particle.update(t / particleNum); // update particle position
    particle.display(); // draw particle
  }

}
