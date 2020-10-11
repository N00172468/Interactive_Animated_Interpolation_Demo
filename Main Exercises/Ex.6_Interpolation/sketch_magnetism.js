// Time:
let t = 0; 

// Magnet Variables:
let friction = 0.99;
let maxAge = 100;
let maxSpeed = 10;
let particles = [];
let magnet;
let magnetStrength = 500;
let radius = 20;


function setup() {
    createCanvas(windowWidth, windowHeight);

    colorMode(HSB, 360, 100, 100); // Max. HSB
    noStroke();
    smooth();

    magnet = createVector(250,360);
}

function draw() {
    background(0, 0, 0);

    spiralAbstract();
    // mousePressed();

    push();
        // fill(360, 0, 100);
        noFill();
        ellipse(magnet.x,magnet.y,50,50);    
    pop();

    particles.push(new particle(mouseX, mouseY, random(-1,1), random(-1,1)));
    for (let p of particles){
        // p.draw();
        // p.move();
        // p.magnet();

        if (mouseIsPressed) {
                if (mouseButton === LEFT) {
                    p.draw();
                    p.move();
                    p.magnet();
                }
            }
    }
    particles = particles.filter(p => { return p.age < maxAge })
}

// ADD PARTICLES GETTING SUCKED INTO CENTRE WHILE IT CHANGES COLOUR WHEN PASSED RANGE???
function particle(x, y, xvel, yvel){
    this.pos = createVector(x,y);
    this.vel = createVector(xvel,yvel);
    this.age = 0;

    let changeX = map(mouseX, 0, width, 17, 235);
    let changeY = map(mouseY, 0, width, 10, 235);
    
    let fromColour = color(changeX, 100, 100);
    let toColour = color(changeY, 100, 100);

    let shrink = map(mouseX, width, 10, 50, 0);

    this.draw = function(){
        push();
            stroke(lerpColor(fromColour, toColour, xvel / this.pos.x));
            noFill()
            ellipse(this.pos.x, this.pos.y, radius, radius);
            // ellipse(this.pos.x, this.pos.y, shrink, shrink);
        pop(); 
    }

    this.move = function(){
        this.pos.add(this.vel);
        this.vel.mult(friction);
        this.vel.limit(maxSpeed);
        this.age++;
        // radius = radius - 1;
    }

    this.magnet = function(){
        var magpull = p5.Vector.sub(magnet,this.pos);
        var magstrength = magnetStrength / this.pos.dist(magnet);
        magpull.normalize().mult(magstrength);
        this.vel.add(magpull);
    }
}

function mousePressed() {
    particles.push(new particle(mouseX, mouseY, random(-1,1), random(-1,1)));
    for (let p of particles){
        p.draw();
    }
}

function spiralAbstract() {
let changeX = map(mouseX, 0, width, 17, 360);
let changeY = map(mouseY, 0, width, 10, 235);

let fromColour = color(changeX, 100, 100);
let toColour = color(changeY, 100, 100);

let spiralOne = 0;
let spiralTwo = 0;
let step = 1;
let spiralWidth = 2;
let dynamicWidth = spiralWidth / 190;

push();
    beginShape(TRIANGLE_STRIP);
        translate(width/6, height/2);

        for (let i = 0; i <= 190 ; i++) {
            spiralOne += step;
            spiralWidth -= dynamicWidth;
            spiralTwo = spiralOne + spiralWidth;
            
            let rotationalSpeed = PI / -10;

            let spiralOneX = spiralOne * sin(rotationalSpeed * i * t);
            let spiralOneY = spiralOne * cos(rotationalSpeed * i * t);

            let spiralTwoX = spiralTwo * sin(rotationalSpeed * i * t);
            let spiralTwoY = spiralTwo * cos(rotationalSpeed * i * t);
            
            fill(lerpColor(fromColour, toColour, i / 190)); 
            vertex(spiralOneX, spiralOneY);
            vertex(spiralTwoX, spiralTwoY);
        }
    endShape();
pop();

t = t + 0.005;
}