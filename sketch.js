var x = 0;
var y = 0;

function setup(){
    createCanvas(720,200)
}

function draw(){
    background('rgb(255, 182, 177)') // automatic semicolon insertion
    circle(x,y,10); //https://p5js.org/reference/p5/circle/
    x = x + 1;
    x = x % 700; // modulo operator
    y = y + 2;
    y = y % 190;
}