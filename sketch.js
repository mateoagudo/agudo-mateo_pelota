function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(150);
  rectMode(CENTER);
}

function draw() {
  background(255, 150, 0);
  fill(255);
  noStroke(0);
  textSize(20);
  textStyle(700);
  text(int(mouseX), 50, 50);
  text(int(mouseY), 50, 100);
  let step = frameCount % windowWidth + 100;
  // Equivalent to translate(x, y);
  applyMatrix(1, 0, 0, 1, 40 + step, -300);
  fill(mouseX);
  stroke(255, 150, 0);
  strokeWeight(mouseY);
  circle(0, windowHeight / 2 , 300);
  quad(150, windowHeight / 2 - 300, 0, windowHeight / 2, 150, windowHeight / 2 + 300, 300, windowHeight / 2);
  circle(600, windowHeight / 2 , 300);
  quad(450, windowHeight / 2 - 300, 300, windowHeight / 2, 450, windowHeight / 2 + 300, 600, windowHeight / 2);
  circle(300, windowHeight / 2 , 300);

  applyMatrix(1, 0, 0, 1, windowHeight / 2 - step, 300);
  fill(255, 150, 0);
  noStroke(0);
  text('INICIAR', 275, 125);
  textSize(128);
  textStyle(BOLD);
  fill(mouseX);

  applyMatrix(1, 0, 0, 1, windowHeight / 2 - step, 300);
  fill(mouseX);
  stroke(255, 150, 0);
  strokeWeight(mouseY);
  circle(0, windowHeight / 2 , 300);
  quad(150, windowHeight / 2 - 300, 0, windowHeight / 2, 150, windowHeight / 2 + 300, 300, windowHeight / 2);
  circle(600, windowHeight / 2 , 300);
  quad(450, windowHeight / 2 - 300, 300, windowHeight / 2, 450, windowHeight / 2 + 300, 600, windowHeight / 2);
  circle(300, windowHeight / 2 , 300);

  applyMatrix(1, 0, 0, 1, -400 + step, -300);
  fill(mouseX);
  stroke(255, 150, 0);
  strokeWeight(mouseY);
  circle(0, windowHeight / 2 , 300);
  quad(150, windowHeight / 2 - 300, 0, windowHeight / 2, 150, windowHeight / 2 + 300, 300, windowHeight / 2);
  circle(600, windowHeight / 2 , 300);
  quad(450, windowHeight / 2 - 300, 300, windowHeight / 2, 450, windowHeight / 2 + 300, 600, windowHeight / 2);
  circle(300, windowHeight / 2 , 300);

}
