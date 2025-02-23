

function showHiddenMessage() {
  // Reina changed: Followed https://www.w3schools.com/js/tryit.asp?filename=tryjs_myfirst -> updated element id to "oops" and innerHTML to show message instead of date
  document.getElementById('oops').innerHTML = 'Oops you found me!' // Reina changed: Linking this function to html button //
} 

function setup() {
    // Setup function - followed https://p5js.org/examples/angles-and-motion-aim/
    createCanvas(windowWidth, windowHeight); // Reina change: Make canvas to fill window width and height
    colorMode(HSB); //Calling colorMode(HSB) or colorMode(HSL) changes to HSB or HSL system instead of RGB.
  
    angleMode(DEGREES); // Set angle mode so that atan2() returns angles in degrees
  
    describe('Two eyes that follow the cursor.');
  }

  function drawEyes() {
    // Draw function - followed https://p5js.org/examples/angles-and-motion-aim/
    background('black');
  
    // Draw left eye
    let leftX = 150;
    let leftY = 200;
  
    // Calculate angle between left eye and mouse
    let leftAngle = atan2(mouseY - leftY, mouseX - leftX);
  
    push();
    translate(leftX, leftY);
    fill(255);
    ellipse(0, 0, 50, 50);
    rotate(leftAngle);
    fill(0);
    ellipse(12.5, 0, 25, 25);
    pop();
  
    // Draw right eye
    let rightX = 250;
    let rightY = 200;
  
    // Calculate angle between right eye and angle
    let rightAngle = atan2(mouseY - rightY, mouseX - rightX); 
  
    push();
    translate(rightX, rightY);
    fill(255);
    ellipse(0, 0, 50, 50);
    rotate(rightAngle);
    fill(0);
    ellipse(12.5, 0, 25, 25);
    pop();
  }

  function drawMouth() {
    // Followed https://p5js.org/ko/reference/p5/arc/ to draw surprised mouth
    arc(200, 290, 80, 80, 100, PI + QUARTER_PI, CHORD);
    describe('A white circle with a black outline missing a section from the top-right.');
  }
  
  function draw() {
    // Reina changed: added new draw function to combine 2 draw functions
    drawEyes();
    drawMouth();
  }

  console.log('Reina is learning!')