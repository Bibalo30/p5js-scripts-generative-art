let cols = 0;
let rows = 0;
const scl = 15;
const w = 1200;
const h = 800;
let terrain = [];
let xoff = 0;
let yoff = 0;
let flying = 0;

function setup() {
    createCanvas(1000, 600, WEBGL);
    cols = w / scl;
    rows = h / scl;

    for (let x = 0; x < cols; x++) {
        terrain[x] = [];
        for (let y = 0; y < rows; y++) {
            terrain[x][y] = 0; // Initialize terrain values
        }
    }
}

function draw() {
    background(0);
    stroke(0, 215, 210);
    noFill();

    translate(-w / 2, -h / 2);
    translate(10, 195, -200);
    rotateX(-200);


    flying -= .1;

    yoff = flying; // Reset yoff for each frame
    for (let y = 0; y < rows - 1; y++) {
        beginShape(TRIANGLE_STRIP);
        xoff = 0; // Reset xoff for each row
        for (let x = 0; x < cols; x++) {
            xoff += 0.1;
            terrain[x][y] = map(noise(xoff, yoff), 0, 1, -180, 180);
            vertex(x * scl, y * scl, terrain[x][y]);
            terrain[x][y + 1] = map(noise(xoff, yoff + 0.1), 0, 1, -180, 180);
            vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);

        }
        yoff += 0.1;
        endShape();
    }
}