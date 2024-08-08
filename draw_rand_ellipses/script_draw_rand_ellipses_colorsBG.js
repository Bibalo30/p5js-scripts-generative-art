function setup() {
    createCanvas(400, 300);
    background(0);
}

function draw() {
    stroke(51);
    fill(0, random(255), random(155), 70);
    ellipse(mouseX, mouseY, random(24, 58), random(24, 58));

}

function mousePressed() {
    background(0);
}