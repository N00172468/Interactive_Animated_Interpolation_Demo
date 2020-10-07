let t = 0; // time variable

function setup() {
    createCanvas(windowWidth, windowHeight);

    colorMode(HSB, 360, 100, 100); // Max. HSB
    noStroke();
    smooth();
}

function draw() {
    // background(0, 0, 10, 0.40);
    background(0, 0, 10);

    let fromColour = color(60, 100, 100);
    let toColour = color(280, 100, 100);

    for (let i = 0; i < 10; i++) {
        push();
            noStroke();
            fill(lerpColor(fromColour, toColour, i / 10));
            rect((i * 60) + 30, (i * 60) + 30, 50, 50);
        pop();

        push();
            noFill();
            stroke(lerpColor(fromColour, toColour, i / 10));
            strokeWeight(5);
            ellipse((i * mouseX) + mouseX, (i * mouseY) + mouseY, i * 10, i * 10);
        pop();

        push();
            noFill();
            stroke(lerpColor(fromColour, toColour, i / 10));
            strokeWeight(5);
            ellipse(1920/2, 937/2, i * 25, i * 25);
        pop();
    }

    // make a x and y grid of ellipses
    for (let x = 0; x <= width; x = x + 30) {
        let fromColour = color(60, 100, 100);
        let toColour = color(280, 100, 100);

        for (let y = 0; y <= height; y = y + 30) {
        // starting point of each circle depends on mouse position
        const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
        const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
        // and also varies based on the particle's location
        const angle = xAngle * (x / width) + yAngle * (y / height);

        // each particle moves in a circle
        const myX = x + 20 * cos(2 * PI * t + angle);
        const myY = y + 20 * sin(2 * PI * t + angle);

        noStroke();
        fill(lerpColor(fromColour, toColour, x / mouseX)); 
        ellipse(myX, myY, 10); // draw particle
        }
    }

    t = t + 0.01; // update time

    spiral();
    
}

function spiral() {
    let fromColour = color(60, 100, 100);
    let toColour = color(280, 100, 100);

    var r1 = 0,r2 = 0, step=1,spiralwidth=20.0,dw=spiralwidth/250;
    
    beginShape(TRIANGLE_STRIP);
    translate(width/1.3,height/2);

    for ( var i = 0 ; i < 250 ; i++ ){
        r1 += step;
        spiralwidth -= dw;
        r2 = r1 + spiralwidth;
        
        var ang = PI/30;
        var r1x = r1*sin(ang*i);
        var r1y = r1*cos(ang*i);
        var r2x = r2*sin(ang*i);
        var r2y = r2*cos(ang*i);
        
        fill(lerpColor(fromColour, toColour, i / 250)); 
        stroke(lerpColor(fromColour, toColour, i / 250));
        vertex(r1x,r1y);
        vertex(r2x,r2y);
       }
    endShape();
  }