'use strict';

class BowlingGame {

  constructor() {
    this.frames = new Array(10);
    for (var i = 0; i < 10; i++) {
      this.frames[i] = new Array(2);
    }
    this.currentFrame = 0;
    this.cumulativeScore = 0;
  };

  inputRoll(score) {
    if (this.frames[this.currentFrame][0] == null) {
      this.frames[this.currentFrame][0] = score;
    } else {
      this.frames[this.currentFrame][1] = score;
      this.currentFrame++;
    }
    if (score == 10) {
      this.currentFrame++;
    }
    console.log(this.frames)
  };

  calculateScore() {
    for (var i = 0; i < this.currentFrame; i++) {
      console.log(this.cumulativeScore)

      if (this.frames[i][0] == 10) {
        this.cumulativeScore += this._calculateStrike(i);
      } else if ((this.frames[i][0] + this.frames[i][1]) == 10 ) {
        this.cumulativeScore += this._calculateSpare(i);
      } else {
        this.cumulativeScore += (this.frames[i][0] + this.frames[i][1]);
      }
    }
    console.log(this.cumulativeScore)
  };

  _calculateStrike(frame) {
    return (this.frames[frame][0] + (this.frames[frame + 1][0] + this.frames[frame + 1][1]));
  };

  _calculateSpare(frame) {
    return (this.frames[frame][0] + this.frames[frame][1] + this.frames[frame + 1][0]);
  };
};
