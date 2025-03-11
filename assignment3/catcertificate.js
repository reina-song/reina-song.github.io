let greeting;
let catNameInput;
let greetingTwo;
let catColorCheckboxes = [];

let certificateGenerated = false;
const colors = ['Black', 'White', 'Orange', 'Brown'];


function setup() {
  createCanvas(windowWidth, windowHeight);
  greeting = createElement('h2', "👇🏻 What is your cat's name?");
  greeting.position(50, 100);

  catNameInput = createInput();
  catNameInput.attribute('placeholder', "Write your cat's name")
  catNameInput.position(50, 160);


  greetingTwo = createElement('h2', '👇🏻 What colour is your cat?');
  greetingTwo.position(50, 200);

  for (let i = 0; i < colors.length; i++) {
    catColorCheckboxes[i] = createCheckbox(colors[i], false);
    catColorCheckboxes[i].position(50, 260 + i*30);
  }
  var button = createButton('Generate free certificate');
  button.style("border-radius","10px");
  button.style('padding', '12px');
  button.style('background-color', 'black');
  button.style('border', 'none');
  button.style('color', 'white');
  button.position(50,400);
  button.mousePressed(function(){
        certificateGenerated = !certificateGenerated;
    });
}


function draw (){
    background(255);
    if(certificateGenerated){
        success();
    }
}

function success(){
    textSize(60);
    text("🐾 The World's Best Cat Furtificate 🐈‍⬛",0, 500);

    textSize(40);
    let catName = catNameInput.value();
    text('Cat name: ' + catName, 200, 600);
    
    textSize(24);
    var checkedValue = [];
    
    for (let i = 0; i < catColorCheckboxes.length; i++) {
        if (catColorCheckboxes[i].checked()) {
            checkedValue.push(colors[i])
        }
    } 
    // checkedValue = ["black", "brown"]
    // checkedValue.join(", ") -> "black, brown"
    text('Colour: ' + checkedValue.join(", "), 200, 650);
}