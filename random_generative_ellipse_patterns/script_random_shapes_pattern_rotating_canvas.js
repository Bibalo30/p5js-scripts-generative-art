function setup() {
    createCanvas(500, 500);
    background(40);
}

let angle = 0;

function draw() {
    background(40);

    translate(width / 2, height / 2); // Move origin to the center of the canvas
    rotate(angle); // Rotate by the current angle

    let rand1 = random(5, 9);
    let rand2 = random(35, 65);
    let rand3 = random(35, 65);

    for (let i = 0; i < width + 50; i += rand1) {
        for (let j = 0; j < height + 50; j += rand1) {
            fill(0, random(255), 150);
            ellipse(i, j, rand2, rand3);
        }
    }

    angle += 0.10; // Increment the angle for continuous rotation
}