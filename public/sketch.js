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
  const width = window.innerWidth;
  const height = window.innerHeight;
  let cnv = createCanvas(width, height);
  cnv.position(0, 0);

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

function draw() {
  background("#ffffff");
  for (i = 0; i < layers.length; i++) {
    for (ii = 0; ii < layers[i].length; ii++) {
      layers[i][ii].update()
      layers[i][ii].show()
    }
  }
}
