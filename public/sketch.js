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

// load image
function preload() {

  covid = loadImage('/assets/covid.png');
  dust = loadImage('/assets/dust.png');
  focus_image = loadImage('/assets/focus.png');
  // focus_image = loadImage(monocleEmoji);
}

// particle class
function particle() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-500, 0);
  this.initialangle = random(0, 4 * PI);
  this.size = random(0, 10);                                       // speed of particle somehow?

  // radius of particle spiral
  // chosen so the particles are uniformly spread out in area
  this.radius = sqrt(random(pow(width * 20 / 1, 2)));

  this.update = function (time) {
    // x position follows a circle
    let w = 0.5; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size particles fall at slightly different y speeds
    this.posY += sin(this.size, 2);

    // delete particle if past end of screen
    if (this.posY > height) {
      let index = particles.indexOf(this);
      particles.splice(index, random(200));
    }
  };

  this.covidDisplay = function () {
    image(covid, this.posX, this.posY)
    // rect(this.posX, this.posY, this.size);
  };

  this.dustDisplay = function () {
    image(dust, this.posY, this.posX);
  };
}

function setup() {

  // default canvas size
  const width = window.innerWidth;
  const height = window.innerHeight;
  let cnv = createCanvas(width, height);
  cnv.position(0, 0);

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
    // Set the vertex
    vertex(x, y / localStorage.getItem("humidityHeight") * 1.5);                                       // height of the wave
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.015;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

  // particle
  // fill(0, 0, 0, random(255));
  const particleNum = localStorage.getItem("particle");

  let t = frameCount / 6000; // update time
  // create a random number of particle each frame
  for (let i = 0; i < particleNum / 100; i++) {
    particles.push(new particle())  // append particle object
  }
  // loop through particles with a for..of loop
  for (let particle of particles) {
    particle.update(t * particleNum / 100); // update particle position
    particle.covidDisplay();
    particle.dustDisplay();
  }

  // sittingtime object
  fill(255, 255, 255, 255);
  const sittingTime = localStorage.getItem("sittingTime");
  // rectMode(CENTER);
  imageMode(CENTER);
  image(focus_image,
    width / 2 + random(sittingTime / 2), // x pos + shake
    height / 2 + random(sittingTime / 2), // y pos + shake
    sittingTime * width / 200, // width
    sittingTime * width / 200 // height
  )
}
