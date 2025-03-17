let bg;
let car;
let greeting;
let canvas;

let catsInHome = []; 
let catsInCar = []; 

function preload(){
    // Repurposed preload & loadImage refer to https://p5js.org/reference/p5/image/
    bg = loadImage('assets/background.png');
    car = loadImage('assets/car.png');
    catsInHome = [
        { 
            name: "takko", 
            offsetX: 0, 
            offsetY: -50, 
            image: loadImage("assets/takko.png"), 
        },
        {
            name: "yakki", 
            offsetX: 100, 
            offsetY: -50, 
            image: loadImage("assets/yakki.png"), 
        },
        {
            name: "minnie", 
            offsetX: 0, 
            offsetY: 50, 
            image: loadImage("assets/minnie.png"), 
        },
        {
            name: "cooper", 
            offsetX: 100, 
            offsetY: 50, 
            image: loadImage("assets/cooper.png"), 
        }
    ]
}


function setup(){
    canvas = createCanvas(1000, 700);
    canvas.position(50,200);

    greeting = createElement('h1', "Make cats to jump in the car to start the journey!")
    greeting.position(50, 50);

    let button = createButton('Jump in!');
    button.style("border-radius","10px");
    button.style('padding', '16px');
    button.style('background-color', 'orange');
    button.style('border', 'none');
    button.style('color', 'black');
    button.position(50,130);
    button.mousePressed(function(){
        if(catsInHome.length > 0) {
            // Tried shift instead of pop refer to https://www.w3schools.com/jsref/jsref_shift.asp to remove first item
            let cat = catsInHome.shift() //고양이라는게 있음, 그거는 뭔데? 집에있는고양이어레이에서 (shift)앞에서부터 하나씩 빼는거임 - pop 은 뒤에서부터 빼는거임
            catsInCar.push(cat) // 그 고양이를 지정했으니, 이제 뭘 시켜야지. 뺀 (고양이)를 어디로 push 할테냐? - 자동차에있는 고양이로 push(넣는다)!
        }
      });
}

let homeX = 50; // 집은 배경의 일부지만 임의로 시작 x위치 지정해주기
let homeY = 250; // 집은 배경의 일부지만 임의로 시작 y위치 지정해주기

let carX = 250; // 자동차로 push 되는 x 위치 지정해주기
let carY = 250; // 자동차로 push 되는 y 위치 지정해주기


function draw(){
    background(bg); // 배경 존재

    image(car, carX, carY, 210, 150); // 움직일 예정인 자동차 이미지 불러오고 그 이미지의 X, Y 위치와 크기 지정
    
    for(let i = 0; i < catsInHome.length; i ++ ){ // 엘레멘트 i 는 0 으로 시작하는데, 집에있는 고양이만큼 루프를 돌려서 각 루프마다 각 고양이 오프셋에 따라서 집에있는 고양이 위치 시키기 - 처음에는 집에 4마리있다가 shift 할때마다 집에있는 고양이는 줄겠지,,집에있는 고양이만큼 고양이를 그려주고싶으니깐
        image(catsInHome[i].image, homeX + catsInHome[i].offsetX, homeY + catsInHome[i].offsetY, 100, 100);
    }
    for(let i = 0; i < catsInCar.length; i ++ ){ // 엘리멘트는 i 는 0 으로 시작하는데, 차로 고양이를 푸쉬받을때 마다, 각 고양이의 오프셋에 따라서 차에 있는 고양이 위치 시키기 - 처음에는 한마리도 없으니 안돌아가다가, push할때마다 고양이는 나타나겠지,,,차에있는 고양이만큼만 고양이를 그려주고싶으니깐
        image(catsInCar[i].image, carX + catsInCar[i].offsetX, carY + catsInCar[i].offsetY, 100, 100);
    }


    // += keep add on to previous number
    let carSpeed = 3

    if(catsInCar.length === 4){//차 안에 탄게 무조건 4명일때!! 중간에 내리면 못 두고감,,,
        carX += carSpeed
    }
}