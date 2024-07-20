function setup() {
    createCanvas(500, 500);
    background(40);
}

let angles = []; // Array to store rotation angles for each ellipse

function draw() {
    background(40);

    let rand1 = random(5, 9);
    let rand2 = random(35, 65);
    let rand3 = random(35, 65);

    for (let i = 0; i < width + 50; i += rand1) {
        for (let j = 0; j < height + 50; j += rand1) {
            let index = i * width + j; // Calculate a unique index for each ellipse
            if (!angles[index]) {
                angles[index] = 0; // Initialize the rotation angle if it doesn't exist
            }

            push(); // Save the current transformation state
            translate(i, j); // Move to the ellipse position
            rotate(angles[index]); // Rotate by the current angle
            fill(0, random(255), 150);
            ellipse(0, 0, rand2, rand3); // Draw the ellipse at (0, 0)
            pop(); // Restore the previous transformation state

            angles[index] += 17 // Increment the angle for continuous rotation
        }
    }
}