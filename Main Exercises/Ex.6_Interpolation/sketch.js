// Time:
let t = 0; 

let move = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);

    colorMode(HSB, 360, 100, 100); // Max. HSB
    noStroke();
    smooth();
}

function draw() {
    // background(0, 0, 5);
    background(0, 0, 0);

    spiralExpand();
    // spiralAbstract();
    
}

function spiralExpand() {
    let changeX = map(mouseX, 0, width, 17, 360);
    let changeY = map(mouseY, 0, width, 10, 235);
    
    // let fromColour = color(60, 100, 100);
    // let toColour = color(280, 100, 100);
    let fromColour = color(changeX, 100, 100);
    let toColour = color(changeY, 100, 100);

    let spiralOne = 0;
    let spiralTwo = 0;
    // let step = 1;
    let step = 10;
    // let step = mouseX / 200;
    // let spiralWidth = 20;
    let spiralWidth = 1.5;
    let dynamicWidth = spiralWidth / 250;
    
    beginShape(TRIANGLE_STRIP);
        translate(width/6, height/2);

        for (let i = 0; i <= 360 ; i++) {
            spiralOne += step;
            // spiralWidth -= dynamicWidth;
            spiralWidth += dynamicWidth;
            spiralTwo = spiralOne + spiralWidth;
            
            let rotationalSpeed = PI / 20;
            // let rotationalSpeed = mouseX / 1999;

            let spiralOneX = spiralOne * sin(rotationalSpeed * i * t);
            let spiralOneY = spiralOne * cos(rotationalSpeed * i * t);

            let spiralTwoX = spiralTwo * sin(rotationalSpeed * i * t);
            let spiralTwoY = spiralTwo * cos(rotationalSpeed * i * t);
            
            fill(lerpColor(fromColour, toColour, i / 360)); 
            stroke(0, 0, 0);
            strokeWeight(0.75);
            // stroke(lerpColor(fromColour, toColour, i / 360));
            vertex(spiralOneX, spiralOneY);
            vertex(spiralTwoX, spiralTwoY);
        }
    endShape();
    t = t + 0.005;
  }

  function spiralAbstract() {
    let changeX = map(mouseX, 0, width, 120, 60);
    let changeY = map(mouseY, 0, width, 300, 150);

    // let fromColour = color(60, 100, 100);
    // let toColour = color(280, 100, 100);
    let fromColour = color(changeX, 100, 100);
    let toColour = color(changeY, 100, 100);

    let spiralOne = 0;
    let spiralTwo = 0;
    let step = 1;
    // let step = mouseX / 200;
    let spiralWidth = 20;
    let dynamicWidth = spiralWidth / 50;
    
    beginShape(TRIANGLE_STRIP);
        // translate(width/2, 0);

        for (let i = 0; i <= 50 ; i++) {
            spiralOne += step;
            spiralWidth -= dynamicWidth;
            spiralTwo = spiralOne + spiralWidth;
            
            let rotationalSpeed = PI / -10;
            // let rotationalSpeed = mouseX / 999;
            // let rotationalSpeed = mouseX / -999;

            let spiralOneX = spiralOne * sin(rotationalSpeed * i * t);
            let spiralOneY = spiralOne * cos(rotationalSpeed * i * t);

            let spiralTwoX = spiralTwo * sin(rotationalSpeed * i * t);
            let spiralTwoY = spiralTwo * cos(rotationalSpeed * i * t);
            
            fill(lerpColor(fromColour, toColour, i / 50)); 
            // stroke(0, 0, 100);
            // strokeWeight(0.5);
            // stroke(lerpColor(fromColour, toColour, i / 50));
            vertex(spiralOneX, spiralOneY);
            vertex(spiralTwoX, spiralTwoY);
        }
        endShape();
        t = t + 0.005;
    }

    // ADD PARTICLES GETTING SUCKED INTO CENTRE WHILE IT CHANGES COLOUR WHEN PASSED RANGE???