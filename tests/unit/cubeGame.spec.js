var cubeGame = require("../../src/utils/CubeGame");
let game = {}, remote = {};
describe('CubeGame Tests', () => {
  beforeEach(() => {
    remote.now = jest.fn().mockReturnValue(1234);
    remote.shuffle = jest.fn().mockReturnValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
    game = new cubeGame(remote);
  });
  it('Should Start Game When Game Start', function () {
    expect(game.state).toBeTruthy();
    expect(game.list.length).toBe(25);
    expect(game.next).toBe(1);
    expect(game.startTime).toBe(1234);
  });

  it('Should Return 点错了 When Click Error Number ', function () {
    game.next = 1;
    expect(game.submit(2)).toBe("点错了");
  });

  it('Should Return Empty When Click 1', function () {
    expect(game.submit(1)).toBeUndefined();
    expect(game.next).toBe(2);
  });


  it('Should Stop Game When Click 25 times', function () {
    game.next = 25;
    game.startTime = 1000;
    expect(game.submit(25)).toBeUndefined();
    expect(game.state).toBeFalsy();
    expect(game.endTime).toBe(1234);
    expect(game.duration).toBe(1234-1000);
  });
});
