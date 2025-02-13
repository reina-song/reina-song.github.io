var colourPicker; // function scope
let strokeWeightSlider;
var bgColourPicker;
let input;
let button;
let inputHello;

function setup (){
    createCanvas(720,300);
    colourPicker = createColorPicker('white');

    strokeWeightSlider = createSlider(1,10,5,0);

    bgColourPicker = createColorPicker('skyblue');

    var bgColorButton = createButton('Refresh');
    bgColorButton.mousePressed(repaint);
    bgColourPicker.changed( repaint ); 
    background( bgColourPicker.value() );

    
    createElement('h1', 'Hello! <br> Welcome to free drawing board!')
    inputHello = createElement('h2', 'What is your name?')

    input = createInput('');
    input.attribute('placeholder','Type your name here');
    input.position(10);

    button = createButton('submit');
    button.position(input.x + input.width);

    button.mousePressed(sayhi);
}
    // remixed from p5js.org/examples/input/     &     p5js.org/examples/input-elements-input-button
function sayhi (){
    // Connect the name variable to the input's value.
    let name = input.value();   

    // Update the greeting to state the person's name.
    inputHello.html(`Nice to meet you! ${name}`)   

    // Clear the input's value.
    input.value('');    
}    // end remixed


function draw (){
    // ellipse(mouseX, mouseY, 10, 10);
    strokeWeight(strokeWeightSlider.value());
    stroke( colourPicker.value() );

    // remixed from p5js.org/reference/mouseispressed/
    if (mouseIsPressed){
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
} // end remixed

function repaint(){
    background(bgColourPicker.value());
    console.log( bgColourPicker.value().setGreen(255) );
}