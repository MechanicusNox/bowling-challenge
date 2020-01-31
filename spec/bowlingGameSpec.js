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

  describe("can calculate", function() {
    it('the points for a normal frame', function() {
      game.inputRoll(3);
      game.inputRoll(3);
      expect(game.score).toEqual(6)
    });

    it('the bonus points for a spare', function() {
      game.inputRoll(8);
      game.inputRoll(2);
      game.inputRoll(2);
      expect(game.score).toEqual(14)
    });

    it('the bonus points for a strike', function() {
      game.inputRoll(10);
      game.inputRoll(2);
      game.inputRoll(2);
      expect(game.score).toEqual(18)
    });
  });
});
