function setup() {
    createCanvas(500, 500);
    background(40);
    noLoop(); // Draw only once
}

function draw() {
    // Your art code here
    let rand1 = random(5, 9);
    let rand2 = random(25, 45);
    let rand3 = random(45, 95);
    for (let i = 0; i < width + 50; i += rand1) {
        for (let j = 0; j < height + 50; j += rand1) {
            fill(150, random(255), 150);
            ellipse(i, j, rand2, rand3);
        }
    }
}