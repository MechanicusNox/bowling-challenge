'use strict';

describe("A game", function() {

  beforeEach(function() {
    var game = new BowlingGame();
  });

  describe('has', function() {

    it('10 frames', function() {
      expect(game.frames.length).toEqual(10);
    });
  });
});
