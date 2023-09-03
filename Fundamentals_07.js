// 7. The following object represents a basketball game and keeps track of the score as the game progresses.
// a) Modify each of the methods so that they can be ‘chained’ together and the last line of the example code works
// b) Add a new method to print the full time final score
// c) Add a new object property to keep track of the number of fouls and a method to increment it, similar but separate to the score. Include the foul count in the half time and full time console messages
// d) Test your object by chaining all the method calls together in different combinations.
const basketballGame = {
  score: 0,
  fouls: 0,
  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  halfTime() {
    console.log("Halftime score is " + this.score);
    return this;
  },
  fullTimeFinalScore() {
    let foulMsg =
      this.fouls === 1
        ? "Only 1 foul occured!"
        : this.fouls + " fouls occured!"; // I've added a message to summarise the fouls here.
    console.log("Full Time Final Score is " + this.score + ". " + foulMsg);
  },
  foul() {
    this.fouls++;
    console.log("Foul number " + this.fouls);
    return this;
  },
  resetGame() {
    this.score = 0;
    this.fouls = 0;
    console.log("Game reset!");
  },
};
//modify each of the above object methods to enable function chaining as below:
basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .halfTime();
//testing fouls and full time score...
basketballGame.resetGame(); // I've added this additional function in order to reset the score and the fouls
basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .halfTime()
  .basket()
  .freeThrow()
  .foul()
  .threePointer()
  .foul()
  .fullTimeFinalScore();
