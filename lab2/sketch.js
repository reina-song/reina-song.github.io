var blueBrick = {
    x:0,
    y:0,
    w:20,
    h:20,
    xSpeed:2.5,
    ySpeed:2.5,
    colour: 'skyblue',
    draw: function (){
        fill( this.colour );
        rect(this.x, this.y, this.w, this.h)
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width - this.w){
            this.xSpeed *= -1;
        }
        if(this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};

var yellowBrick = {
    x:0,
    y:0,
    w:20,
    h:20,
    xSpeed:2,
    ySpeed:2,
    colour: 'yellow',
    draw: function (){
        fill( this.colour );
        rect(this.x, this.y, this.w, this.h)
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width - this.w){
            this.xSpeed *= -1;
        }
        if(this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};

var pinkBrick = {
    x:0,
    y:0,
    w:20,
    h:20,
    xSpeed:3,
    ySpeed:3,
    colour: 'pink',
    draw: function (){
        fill( this.colour );
        rect(this.x, this.y, this.w, this.h)
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width - this.w){
            this.xSpeed *= -1;
        }
        if(this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};

// redBrick.x++ returns current value then increments
// ++redBrick.x increments value and then returns   

function setup(){
    createCanvas(720,280);
}

function draw(){
    background('black');
    blueBrick.draw();
    blueBrick.move();
    yellowBrick.draw();
    yellowBrick.move();
    pinkBrick.draw();
    pinkBrick.move();
}