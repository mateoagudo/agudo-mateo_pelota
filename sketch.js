let posX;
let posY;
let diametro;
let radio;
let circulo;
let fondo;
let velX;

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
  fondo = color(0, 50, 200);
  velX = 25;
}

function draw() {
  background(fondo);
  posX -= velX;
  if (posX < -radio) {
    diametro = random(50, 200);
    radio = diametro / 2;
    posX = windowWidth + radio;
    posY = random(windowHeight);
    circulo = color(255, random(0, 255), 0);
    fondo = color(random(0, 150), 0, 255);
    22;
  }

  fill(circulo);
  noStroke(0);
  circle(posX, posY, diametro);

  print(posX);
  print(color);
}
