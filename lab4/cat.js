let kitty;

function preload() {
    kitty = loadImage('/lab4/assets/yakki.png');
  }

function setup() {
    createCanvas(windowWidth, windowHeight);
    image(kitty, 0 , 550, 100, 100);
    image(kitty, 100 , 550, 100, 100);
    image(kitty, 200 , 550, 100, 100);
    image(kitty, 300 , 550, 100, 100);
    image(kitty, 400 , 550, 100, 100);
  

      // Create a p5.Image object.
  let img = createImage(100, 100);
  img.loadPixels();
  // Create a color gradient.
  for (let x = 0; x < img.width; x += 1) {
    for (let y = 0; y < img.height; y += 1) {
      // Calculate the transparency.
      let a = map(x, 0, img.width, 0, 255);
      // Create a p5.Color object.
      let c = color(255, 0, 100, a);
      // Set the pixel's color.
      img.set(x, y, c);
    }
  }
    img.updatePixels();
    image(img, 500, 550);
  

    let video = createVideo('/assets/yakki.mov');
    video.size(windowWidth/2, windowHeight/2);
    video.position(20, 10); 
    video.showControls();
  }
