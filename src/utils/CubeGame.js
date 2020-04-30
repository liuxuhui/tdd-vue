module.exports = class CubeGame {
  constructor(remote) {
    this.remote=remote;
    this.state = true;
    this.next = 1;
    this.startTime = remote.now();
    this.endTime = "";
    this.duration = 0;
    this.list = remote.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
  }

  submit(number) {
    if (number !== this.next) return "点错了";
    if (number === 25) {
      this.state = false;
      this.endTime= this.remote.now();
      this.duration=this.endTime-this.startTime;
      return;
    }
    this.next = this.next + 1;
  }
};