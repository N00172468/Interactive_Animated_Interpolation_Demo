let rects = []; 

function setup() {
    createCanvas(windowWidth, windowHeight);
    // background(127);

    for (let i = 0; i < 10; i++) {
        rects.push(new Rectangle());
    }
}

function draw() {
    background(127);

    for (let i; i < rects.length; i++) {
        rects[i].display();
    }
}

class Rectangle {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.from = color(0, 255, 0);
        this.to = color(0, 0, 255);
        this.interA = lerpColor(this.from, this.to, 0.33);
        this.interB = lerpColor(this.from, this.to, 0.66);
    }

    display() {
        stroke(this.interB);
        strokeWeight(1);
        fill(this.interA);
        rect(this.x, this.y, 50, 50);
    }
}