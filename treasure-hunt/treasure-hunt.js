

var setup = function(){

    var canvas = createCanvas(400,400)
    canvas.parent('sketch-holder')





    var img;
    function preload() {
      img = loadImage('assets/Hanzo0.png');
    }
    function setup() {
      // Top-left corner of the img is at (0, 0)
      // Width and height are the img's original width and height
      image(img, 0, 0);
    }
ellipse(100,100,10,10);
};