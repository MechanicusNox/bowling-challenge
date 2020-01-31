'use strict';

describe("A game", function() {

  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it('has 10 frames', function() {
    expect(game.frames.length).toEqual(10);
  });

  it('can accept score input', function() {
    game.inputRoll(3);
    expect(game.frames[0][0]).toEqual(3);
  });

  // describe("");
});
