let screen = 0;
let speed = 6;
let score = 0;
let fallingObjects = [];

function preload() {
    takko = loadImage("final/assets/takko.png");
    yakki = loadImage("assets/yakki.png");
    minnie = loadImage("assets/minnie.png");
    cooper = loadImage("assets/cooper.png");

    catFood = loadImage("assets/catfood.png");
    catTreat = loadImage("assets/cattreat.png");
    water = loadImage("assets/water.png");

    vacuum = loadImage("assets/vacuum.png");
    dust = loadImage("assets/dust.png");
    bug = loadImage("assets/bug.png");

    legendImg = loadImage("assets/legend.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    button1 = createImg("assets/takko.png");
    button1.position(windowWidth / 2.8, windowHeight / 1.56);
    button1.size(150, 150);
    button1.style("cursor", "pointer");
    button1.mousePressed(function () {
        selectCharacter(takko);
    });
    button2 = createImg("assets/yakki.png");
    button2.position(windowWidth / 2.3, windowHeight / 1.56);
    button2.size(150, 150);
    button2.style("cursor", "pointer");
    button2.mousePressed(function () {
        selectCharacter(yakki);
    });
    button3 = createImg("assets/minnie.png");
    button3.position(windowWidth / 2, windowHeight / 1.56);
    button3.size(150, 150);
    button3.style("cursor", "pointer");
    button3.mousePressed(function () {
        selectCharacter(minnie);
    });
    button4 = createImg("assets/cooper.png");
    button4.position(windowWidth / 1.75, windowHeight / 1.56);
    button4.size(150, 150);
    button4.style("cursor", "pointer");
    button4.mousePressed(function () {
        selectCharacter(cooper);
    });
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    if (screen == 0) {
        startScreen()
    } else if (screen == 1) {
        gameOn()
    } else if (screen == 2) {
        endScreen()
    } else if (screen == 3) {
        wellDone();
    }
}

function startScreen() {
    background("lightblue");
    fill(0);
    textAlign(CENTER);
    textSize(60);
    text('🐾 THE CAT-CHING GAME 🐾', windowWidth / 2, windowHeight / 5)
    textSize(30);
    text('Choose your character and reach 30 points!', windowWidth / 2, windowHeight / 1.65);

    imageMode(CENTER);
    image(legendImg, windowWidth / 2, windowHeight / 2.55, 350, 350);
}

let player;
function selectCharacter(characterImg) {
    player = characterImg;
    screen = 1;

    button1.hide();
    button2.hide();
    button3.hide();
    button4.hide();
}

function gameOn() {
    background("lightblue");
    fill(0);
    text("score = " + score, 100, 50)

    imageMode(CENTER);
    image(player, mouseX, height - 100, 150, 150);

    for (let i = 0; i < fallingObjects.length; i ++) {
        let obj = fallingObjects[i];
        image(obj.img, obj.x, obj.y, obj.size, obj.size);
        obj.y += speed;

        if (
            obj.y > height - 120 &&
            obj.x > mouseX - 75 &&
            obj.x < mouseX + 75
        ) {
            score += obj.points;
            fallingObjects.splice(i, 1);
        } else if (obj.y > height) {
            fallingObjects.splice(i, 1);
        }
    }

    if (frameCount % 50 === 0) {
        groupFallingObject();
    }

    if (score < 0) {
        screen = 2;
    }
    if (score >= 30) {
        screen = 3;
        fallingObjects = [];
        return;
    }
}

function groupFallingObject() {
    const types = [
        { img: catFood, points: 3 },
        { img: catTreat, points: 2 },
        { img: water, points: 1 },
        { img: vacuum, points: -3 },
        { img: dust, points: -2 },
        { img: bug, points: -1 }
    ];

    let type = random(types);
    fallingObjects.push({
        x: random(20, width - 20),
        y: -40,
        img: type.img,
        points: type.points,
        size: random(70, 100)
    });
}

function endScreen() {
    background(0);
    fill(255);
    textAlign(CENTER);
    textSize(60);
    text('GAME OVER', width / 2, height / 2.5)
    textSize(40);
    text("SCORE = " + score, width / 2, height / 2.05)
    textSize(25);
    text('Click anywhere to play again', width / 2, height / 1.5);
}

function wellDone() {
    background("pink");
    fill(0);
    textAlign(CENTER);
    textSize(60);
    text("🎉 WELL DONE! 🎉", width / 2, height / 2.5);
    textSize(40);
    text("SCORE = " + score, width / 2, height / 2.05);
    textSize(25);
    text("Click anywhere to play again", width / 2, height / 1.5);
}

function mousePressed() {
    if (screen == 2 || screen == 3) {
        screen = 0;
        score = 0;
        fallingObjects = []

        button1.show();
        button2.show();
        button3.show();
        button4.show();
    }
}