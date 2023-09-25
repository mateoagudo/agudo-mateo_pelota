let posX;
let posY;
let diametro;
let radio;
let circulo;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // print(posX);
  // posX = posX + 25;
  // print(posX);
  // posX *= 8;
  // print(posX);

  posX = windowWidth / 2;
  posY = windowHeight / 2;
  diametro = 30;
  radio = diametro / 2;
  circulo = color(255, 150, 0);
}

function draw() {
  background(255);
  posX -= 10;
  if (posX < -radio) {
    diametro = random(10, 100);
    radio = diametro / 2;
    posX = windowWidth + radio;
    posY = random(windowHeight);
    circulo = color(255, random(0, 255), 0);
  }

  fill(circulo);
  noStroke(0);
  circle(posX, posY, diametro);

  print(posX);
  print(color);
}
