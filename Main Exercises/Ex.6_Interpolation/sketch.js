function setup() {
    createCanvas(windowWidth, windowHeight);

    colorMode(HSB, 360, 100, 100); // Max. HSB
    noStroke();
    smooth();
}

function draw() {
    background(0, 0, 10);

    spiralExpand();
    spiralAbstract();
    
}

function spiralExpand() {
    // let fromColour = color(60, 100, 100);
    let toColour = color(280, 100, 100);
    let fromColour = color(mouseX, 100, 100);
    // let toColour = color(mouseY, 100, 100);

    let r1 = 0;
    let r2 = 0;
    // let step = 1;
    let step = mouseX / 200;
    let spiralWidth = 20.0;
    let dw = spiralWidth / 250;
    
    beginShape(TRIANGLE_STRIP);
        translate(width/6, height/2);

        for (let i = 0; i <= 360 ; i++) {
            r1 += step;
            spiralWidth -= dw;
            r2 = r1 + spiralWidth;
            
            let ang = PI / 30;
            // let ang = mouseX / 1999;
            let r1x = r1 * sin(ang * i);
            let r1y = r1 * cos(ang * i);
            let r2x = r2 * sin(ang * i);
            let r2y = r2 * cos(ang * i);
            
            fill(lerpColor(fromColour, toColour, i / 360)); 
            stroke(lerpColor(fromColour, toColour, i / 360));
            vertex(r1x, r1y);
            vertex(r2x, r2y);
        }
    endShape();
  }

  function spiralAbstract() {
    let fromColour = color(60, 100, 100);
    // let toColour = color(280, 100, 100);
    // let fromColour = color(mouseX, 100, 100);
    let toColour = color(mouseY, 100, 100);

    let r1 = 0;
    let r2 = 0;
    let step = 1;
    // let step = mouseX / 200;
    let spiralWidth = 20.0;
    let dw = spiralWidth / 250;
    
    beginShape(TRIANGLE_STRIP);
        translate(width/2, 0);

        for (let i = 0; i <= 240 ; i++) {
            r1 += step;
            spiralWidth -= dw;
            r2 = r1 + spiralWidth;
            
            // let ang = PI / 30;
            let ang = mouseX / 1999;
            let r1x = r1 * sin(ang * i);
            let r1y = r1 * cos(ang * i);
            let r2x = r2 * sin(ang * i);
            let r2y = r2 * cos(ang * i);
            
            fill(lerpColor(fromColour, toColour, i / 240)); 
            stroke(lerpColor(fromColour, toColour, i / 240));
            vertex(r1x, r1y);
            vertex(r2x, r2y);
        }
    endShape();
  }