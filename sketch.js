var kicker1;
var kicker2;
var kavanaugh;
var kavanaugh2;

function preload() {
  kicker1= loadImage('kickerstart.png');
  kicker2= loadImage('kickerattack.png');
  kavanaugh= loadImage('kavanaugh.jpg');
  kavanaugh2= loadImage('kavanaugh2.jpg');
}

function setup() {
  createCanvas(1600, 900);
}

function draw() {
  image(kavanaugh, 0, 0);
  image(kicker1, mouseX, mouseY, 585, 525);

  if(mouseIsPressed) {
    image(kavanaugh2, 0, 0);
    image(kicker2, mouseX, mouseY, 585, 525);
  } else {
    image(kicker1, mouseX, mouseY, 585, 525);
  }

}
