let ellipses = []; // Array to store ellipse positions, rotation angles, and rotation speeds

function setup() {
    createCanvas(500, 500);
    background(40);
    generateEllipses();
}

function generateEllipses() {
    let rand1 = random(5, 9);
    let rand2 = random(45, 95);
    let rand3 = random(45, 95);

    for (let i = 0; i < width + 50; i += rand1) {
        for (let j = 0; j < height + 50; j += rand1) {
            ellipses.push({
                x: i,
                y: j,
                angle: 0,
                rotationSpeed: random(-3.50, 50),
                sizeX: rand2,
                sizeY: rand3
            });
        }
    }
}

function draw() {
    background(40);

    for (let ellipseData of ellipses) {
        push(); // Save the current transformation state
        translate(ellipseData.x, ellipseData.y); // Move to the ellipse position
        rotate(ellipseData.angle); // Rotate by the current angle
        //tate(15);
        fill(random(200), 100, random(255));
        ellipse(0, 0, ellipseData.sizeX, ellipseData.sizeY); // Draw the ellipse at (0, 0)
        pop(); // Restore the previous transformation state

        // Rotate the ellipse around its own center
        ellipseData.angle += ellipseData.rotationSpeed; // Update the angle based on rotation speed
    }
}