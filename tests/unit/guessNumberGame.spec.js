const guessNumberGame=require("../../src/utils/GuessNumberGame");


it('Should Start When Start Game', function () {
    let game=new guessNumberGame();
    expect(game.state).toBe(true);
});

it('Should Have 7 Chance When Start Game', function () {
    let game=new guessNumberGame();
    expect(game.chance).toBe(7);
});

it('Should Return Smaller When Input 51 ', function () {
    let game=new guessNumberGame();
    game.target=50;
    expect(game.guess(51)).toBe("Smaller");
    expect(game.chance).toBe(6);
});

it('Should Return Bigger When Input 49 ', function () {
    let game=new guessNumberGame();
    game.target=50;
    expect(game.guess(49)).toBe("Bigger");
    expect(game.chance).toBe(6);
});

it('Should Return You Win When Input 50 ', function () {
    let game=new guessNumberGame();
    game.target=50;
    expect(game.guess(50)).toBe("You Win");
    expect(game.state).toBe(false);
});

it('Should Return You Lose When Chance is 0 ', function () {
  let game = new guessNumberGame();
  game.target = 50;
  game.chance = 1;
  expect(game.guess(49)).toBe("You Lose");
  expect(game.state).toBe(false);
});


//字符串和数字 的=== bug
it('Should Return You Win When Input 60', function () {
  let game = new guessNumberGame();
  game.target = 60;
  expect(game.guess("60")).toBe("You Win");
  expect(game.state).toBe(false);
});


//字符串和数字 的=== bug
it('Should Return input a number! bitch! When Input ABC', function () {
  let game = new guessNumberGame();
  expect(game.guess("ABC")).toBe("input a number! bitch!");
});


//字符串和数字 的=== bug
it('Should Return You Lose When Input ABC and chance <4 ', function () {
  let game = new guessNumberGame();
  game.chance = 3;
  expect(game.guess("ABC")).toBe("You Lose");
});



