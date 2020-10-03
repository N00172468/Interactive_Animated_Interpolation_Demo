numOfSegments = 360;
radius = 200;

function setup() {
    createCanvas(600, 600);
    // background(0, 5, 15);

    colorMode(HSB, 360, 100, 100); // Max. HSB
    angleMode(DEGREES);
    noStroke();
    smooth();
}

function draw() {
    background(0, 0, mouseX);
    fill(200, 0, 0);
    let stepAngle = 360/numOfSegments;

    // Begin Triangle Fan (based on P5.js docs.):
    beginShape(TRIANGLE_FAN);
        vertex(300, 300); // Centre of diameter (Static)
        for (let a = 0; a <= 360; a += stepAngle) {
            let vx = radius * cos(a) + 300;
            let vy = radius * sin(a) + 300;
            // fill(a, 100, 100); // Created Radial Colour Hue (HSB variant)
            fill(mouseX - a, mouseX, 100); // Created Radial Colour Hue (HSB variant)
            vertex(vx, vy);
        }

        textSize(24);
        textAlign(CENTER);
        text('Slide Mouse Cursor from Left to Right', 300, 50);
        fill(mouseX - 360, mouseX, 100);
    endShape(CLOSE);
}