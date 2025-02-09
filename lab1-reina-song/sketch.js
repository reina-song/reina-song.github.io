

function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    background('pink');
    fill('white');
    stroke('purple')
    for(var i = 0; i <12345; i++){
        rect((i*100)%width,(i*30)%height,10,10);
    }
    fill('red');
    stroke('red');
    if(mouseX < 500){
        circle(mouseX,mouseY,150,150);
    }else{
        circle(mouseX,mouseY,50,50,25);
    }
}