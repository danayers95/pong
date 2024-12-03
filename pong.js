var DIRECTION = {
  IDLE: 0,
  UP: 1,
  DOWN: 2,
  LEFT: 3,
  RIGHT: 4,
};

var rounds = [5, 5, 3, 3, 2];
var colors= ['#1abc9c', '#2ecc71', '#3498db', '#e74c3c', '#9b59b6'];

var Ball = {
  new: function (incrementedSpeed) {
    return {
      width: 18, 
      height: 18, 
      x: (this.canvas.width / 2) - 9, 
      y: (this.canvas.height / 2) - 9,
      moveX: DIRECTION.IDLE,
      moveY: DIRECTION.IDLE,
      speed: incrementedSpeed || 9
    };
  }
};

var Paddle = {
  new: function (side) {
    return {
      width: 18, 
      height: 70, 
      x: side === 'left' ? 150 : this.canvas.width - 150,
      y: (this.canvas.height / 2) - 35,
      score: 0, 
      move: DIRECTION.IDLE,
      speed: 10, 
      wins: 0
    };
  }
}; 
