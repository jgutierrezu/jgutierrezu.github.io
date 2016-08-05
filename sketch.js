var x;
x = 10;
frameRate(1)
function setup() {
 createCanvas(800, 600);
 background(0, 255, 0)
 frameRate(100)
}

function draw() {
  var miColor = color(255);
  background(miColor);
  miElipse();
  muchasElipses(1000);
  ellipse(random(width), random(height), 100, 100)
}
function miElipse(cuantas) {
  strokeWeight(10);
  stroke(0, 0, 255);
  fill(255, 0, 0, 100);
  for (var i = 0; i < cuantas; i++) {
    fill(random(255), random(255), random(255), random(255));
    if (mouseX < width/3) {
  ellipse(random, random, x, x);
  x = random(100);
  }
}
function muchasElipses() {
  ellipse(random(width), random(height), 100, 100)
}