let t = 0; // Time:
let rotateSpeed = 5; 


function setup() {
    createCanvas(windowWidth, windowHeight);

    colorMode(HSB, 360, 100, 100); // Max. HSB
    noStroke();
    smooth();
}

function draw() {
    background(0, 0, 0);

    if (mouseIsPressed) {
        if (mouseButton === LEFT) {
            t += 0.01;
        }
        if (mouseButton === CENTER) {
            t -= 0.01;
        }
        if (mouseButton === RIGHT) {
            t -= 0.005;
        }
    }
    

    spiralExpand();
}

function spiralExpand() {
    let changeX = map(mouseX, 0, width, 17, 360);
    let changeY = map(mouseY, 0, width, 10, 235);
    
    let fromColour = color(changeX, 100, 100);
    let toColour = color(changeY, 100, 100);

    let spiralOne = 0;
    let spiralTwo = 0;
    let step = 10;
    let spiralWidth = 1.5;
    let dynamicWidth = spiralWidth / 250;
    
    push();
        beginShape(TRIANGLE_STRIP);
            translate(width/6, height/2);

            for (let i = 0; i <= 360 ; i++) {
                spiralOne += step;
                spiralWidth += dynamicWidth;
                spiralTwo = spiralOne + spiralWidth;
                
                let rotationalSpeed = PI / rotateSpeed;

                let spiralOneX = spiralOne * sin(rotationalSpeed * i * t);
                let spiralOneY = spiralOne * cos(rotationalSpeed * i * t);

                let spiralTwoX = spiralTwo * sin(rotationalSpeed * i * t);
                let spiralTwoY = spiralTwo * cos(rotationalSpeed * i * t);
                
                fill(lerpColor(fromColour, toColour, i / 360)); 
                vertex(spiralOneX, spiralOneY);
                vertex(spiralTwoX, spiralTwoY);
            }
        endShape();
    pop();

    t = t + 0.005;
  }