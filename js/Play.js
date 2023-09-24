class Play {
  constructor() {
    this.startScreen = document.querySelector("#start-screen");
    this.gameProper = document.querySelector("#game-proper");
    this.gameScreen = document.querySelector("#game-screen");
    this.endScreen = document.querySelector("#end-screen");
    this.score = 0;
    this.endGame = false;
    this.width = 700;
    this.height = 500;
    this.spaceship = new Spaceship(
      this.gameScreen,
      330,
      385,
      70,
      110,
      "./images/doraemonSpaceship.png"
    );
    this.enemies = [];
    this.points = [];
    this.endGameSound = new Audio("../audio/wonk-wonk-wonk-sound.mp3");
    this.mouseSound = new Audio("../audio/mouse-6821.mp3");
  }

  gameStart() {
    this.gameScreen.style.width = `${this.width}px`;
    this.gameScreen.style.height = `${this.height}px`;

    this.startScreen.style.display = "none";
    this.gameProper.style.display = "block";
    this.gameScreen.style.display = "block";
    this.endScreen.style.display = "none";

    this.continueGame();
  }

  continueGame() {
    if (this.endGame) return true;
    this.update();
    window.requestAnimationFrame(() => {
      this.continueGame();
    });
  }

  update() {
    this.spaceship.move();

    const score = document.querySelector("#score");

    for (let i = 0; i < this.enemies.length; i++) {
      const obstacle = this.enemies[i];

      obstacle.move();

      // If the player's car collides with an obstacle
      if (this.spaceship.touchWith(obstacle)) {
        this.mouseSound.play();
        alert`You lose :(`;
        this.finishGame();

        // Increase the score by 1
        this.score += Math.floor(Math.random() * 20);
        ////score.innerText += Math.floor(Math.random() * 20);;
        // Remove the obstacle element from the DOM
        enemy.mouse.remove();
        // Remove obstacle object from the array
        this.enemies.splice(i, 1);
        // Update the counter variable to account for the removed obstacle
        i--;

        for (let j = 0; j < this.points.length; j++) {
          const dorayaki = this.points[i];
          dorayaki.move();

          if (this.spaceship.touchWith(dorayaki)) {
            //code
          }
        }
      } // If the obstacle is off the screen (at the bottom)
      else if (obstacle.top > this.height) {
        // Increase the score by 1
        this.score += Math.floor(Math.random() * 20);
        //score.innerText += Math.floor(Math.random() * 20);; //grab this value at the end and display it on the screen
        // Remove the obstacle from the DOM
        obstacle.mouse.remove();
        // Remove obstacle object from the array
        this.enemies.splice(i, 1);
        // Update the counter variable to account for the removed obstacle
        i--;
      }
    }

    // Create a new obstacle based on a random probability
    // when there is no other enemies on the screen
    if (Math.random() > 0.95 && this.enemies.length < 1) {
      this.enemies.push(new Enemy(this.gameScreen));
    }
  }

  // Create a new method responsible for ending the game
  finishGame() {
    this.endGame = true;
    this.endGameSound.play();
    // Hide game screen
    this.gameProper.style.display = "none";
    // Show end game screen
    this.endScreen.style.display = "block";
  }

  playAgain() {
    location.reload();
  }
}
