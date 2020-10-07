function setup() {
    createCanvas(windowWidth, windowHeight);

    colorMode(HSB, 360, 100, 100); // Max. HSB
    noStroke();
    smooth();
}

function draw() {
    background(0, 0, 10, 70);

    let fromColour = color(60, 100, 100);
    let toColour = color(280, 100, 100);

    for (let i = 0; i < 10; i++) {
        push();
            fill(lerpColor(fromColour, toColour, i / 10));
            rect((i * 60) + 30, (i * 60) + 30, 50, 50);
        pop();

        push();
            noFill();
            stroke(lerpColor(fromColour, toColour, i / 10));
            strokeWeight(5);
            // rect((i * 60) + 30, (i * 60) + 30, 50, 50);
            ellipse((i * mouseX) + mouseX, (i * mouseY) + mouseY, i * 10, i * 10);
        pop();

        push();
            noFill();
            stroke(lerpColor(fromColour, toColour, i / 10));
            strokeWeight(5);
            ellipse(1920/2, 937/2, i * 25, i * 25);
        pop();
    }
}