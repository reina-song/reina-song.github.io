var x = 0;
var y = 0;

function setup(){
    createCanvas(720,480)
}

function draw(){
    background('#f1f1f1') // automatic semicolon insertion
    rect(x,y,10,10);
    x = x + 1;
    x = x % 700; // modulo operator
    y = y + 2;
    y = y % 400;
}