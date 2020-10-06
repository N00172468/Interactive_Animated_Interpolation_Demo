function setup() {
    createCanvas(700, 700);

    colorMode(HSB, 360, 100, 100); // Max. HSB
    noStroke();
    smooth();
}

function draw() {
    background(0);

    let fromColour = color(60, 100, 100);
    let toColour = color(280, 100, 100);

    for (let i = 0; i < 10; i++) {
        fill(fromColour);
        stroke(toColour);
        rect((i * 60) + 30, 100, 50, 50);
    }
}