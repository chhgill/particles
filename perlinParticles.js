var inc = 0.05;
var cols, rows;
var scl = 20;

var zoff = 0;

// var fr;

var particles = [];

var flowfield;


function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = floor(width / scl);
  rows = floor(height / scl);
  // fr = createP('');

  flowfield = new Array(cols * rows);

  for (var i = 0; i < 6000; i++) {
    particles[i] = new Particle();
  }
  // background(40);
}

function draw() {
  background(25);
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 1.7;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(random(-1, 5));
      flowfield[index] = v;
      xoff += inc;
      // stroke(0, 20);
      // strokeWeight(1);
      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // line(0, 0, scl, 0);
      // pop();
    }
    yoff += inc;

    zoff += random(0.004, 0.005);
  }
for (var i = 0; i < particles.length; i++) {
  particles[i].follow(flowfield);
  particles[i].update();
  particles[i].show();
  particles[i].edges();
  }
}
