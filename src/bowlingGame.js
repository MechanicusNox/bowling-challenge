'use strict';

class BowlingGame {
  constructor() {
    this.frames = new Array(10);
    for (var i = 0; i < 10; i++) {
      this.frames[i] = new Array(2);
    }
    this.currentFrame = 0;
  };

  inputRoll(score) {
    if (this.frames[this.currentFrame][0] == null) {
      this.frames[this.currentFrame][0] = score;
    } else {
      this.frames[this.currentFrame][1] = score;
      this.currentFrame++;
    }
  };
};
