module.exports = class GuessNumberGame {
  constructor() {
    this.state = true;
    this.chance = 7;
    this.target = getRandomNumber(1, 99);
  }

  guess(number) {
    this.chance = this.chance - 1;
    number = parseInt(number);
    if (isNaN(number)) {
      this.chance = this.chance - 3;
      if (this.chance <= 0) {
        this.state = false;
        return "You Lose";
      }
      return "input a number! bitch!";
    }
    if (number === this.target) {
      this.state = false;
      return "You Win";
    }
    if (this.chance <= 0) {
      this.state = false;
      return "You Lose";
    }
    if (number > this.target) return "Smaller";
    return "Bigger";
  }
};

function getRandomNumber(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



