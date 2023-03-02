let chinaImage;
function preload() {
  chinaImage = loadImage("images/china keyed.png");
}
function setup() {
    var myCanvas = createCanvas(windowWidth, windowHeight);
    myCanvas.parent("intro-canvas");
    background(54,72,107);
    tint(200, 100);

    image(chinaImage,windowWidth/2,windowHeight/2,500,400);
  // image(chinaImage,0,0,width,height,0,0,chinaImage.width,chinaImage.height,CONTAIN,LEFT);
}

function draw() {
  //  image(chinaImage,windowWidth/2,windowHeight/2-200,500,400);

   // image(chinaImage,windowWidth/2,windowHeight/2-150,400,300); 
   // image.draw();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    image(chinaImage,windowWidth/2,windowHeight/2-250,500,400);
  }