'use strict';

describe("A game", function() {

  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  describe('has', function() {

    it('10 frames', function() {
      expect(game.frames.length).toEqual(10);
    });
  });
});
