module.exports = {
  now() {
    return new Date().getTime();
  },
  shuffle(arr) {
    return arr.sort(() => {
      return (Math.random() - 0.5);
    });
  }
};