let kitty;

function preload() {
    kitty = loadImage('/assets/yakki.png');
  }

function setup() {
    createCanvas(windowWidth, windowHeight);
    image(kitty, 0 , 550, 100, 100);
    image(kitty, 100 , 550, 100, 100);
    image(kitty, 200 , 550, 100, 100);
    image(kitty, 300 , 550, 100, 100);
    image(kitty, 400 , 550, 100, 100);
  
    let video = createVideo('/assets/yakki.mov');
    video.size(windowWidth/2, windowHeight/2);
    video.position(20, 10); 
    video.showControls();
  }
