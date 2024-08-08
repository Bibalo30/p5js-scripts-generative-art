function setup() {
    createCanvas(400, 300);
    background(0);
}

function draw() {
    stroke(51);
    fill(250, 50);
    ellipse(mouseX, mouseY, random(24, 58), random(24, 58));

}

function mousePressed() {
    background(0);
}