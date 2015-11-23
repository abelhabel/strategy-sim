function SlowAndStrong(x, y) {
  this.posx = x;
  this.posy = y;
  this.r = 24;
  this.w = this.h = this.r * 2;

  this.moveSpeed = 1;
  this.damage = 3;
  this.attackSpeed = 1;
  this.fillStyle = "rgb(0,255,255)";
}

module.exports = SlowAndStrong;
