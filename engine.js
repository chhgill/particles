function Particle() {
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = random(0.5, 5);

  this.update = function() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

this.follow = function(vectors) {
  var x = floor(this.pos.x / scl);
  var y = floor(this.pos.y / scl);
  var index = x + y * cols;
  var force = vectors[index];
  this.applyForce(force)
}

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.show = function() {
    stroke(200, 250, 230);
    strokeWeight(1);
    point(this.pos.x, this.pos.y);
  }

this.edges = function() {
  if (this.pos.x > width) this.pos.x = 0;
  if (this.pos.x < 0) this.pos.x = width;
  if (this.pos.y > height) this.pos.y = 0;
  if (this.pos.y < 0) this.pos.y = height;
}

}
