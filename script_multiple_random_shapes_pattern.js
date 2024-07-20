function setup() {
    createCanvas(500, 500);
    background(40);
}

let angle = 0;

function draw() {
    background(40);

    let rand1 = random(5, 9);
    let rand2 = random(35, 65);
    let rand3 = random(35, 65);

    for (let i = 0; i < width + 50; i += rand1) {
        for (let j = 0; j < height + 50; j += rand1) {
            push(); // Save the current transformation state
            translate(i, j); // Move to the ellipse position
            rotate(angle); // Rotate by the current angle
            fill(0, random(255), 150);
            ellipse(0, 0, rand2, rand3); // Draw the ellipse at (0, 0)
            pop(); // Restore the previous transformation state
        }
    }

    angle += 0.01; // Increment the angle for continuous rotation
}