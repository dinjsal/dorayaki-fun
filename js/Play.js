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
      310,
      400,
      100,
      100,
      "./images/doraemonPurpleSpaceship.png"
    );
    this.enemies = [];
    this.points = [];
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
    if (this.endGame) return;
    this.update();
    window.requestAnimationFrame(() => {
      this.continueGame();
    });
  }

  update() {
    this.spaceship.move();

    for (let i = 0; i < this.enemies.length; i++) {
      const obstacle = this.enemies[i];
      obstacle.move();

      // If the player's car collides with an obstacle
      if (this.spaceship.touchWith(obstacle)) {
        alert`You lose :(`;
        this.finishGame();

        for (let j = 0; j < this.points.length; j++) {
          const dorayaki = this.points[i];
          dorayaki.move();

          if (this.spaceship.touchWith(dorayaki)) {
          }
        }

        // Remove the obstacle element from the DOM
        enemy.mouse.remove();
        // Remove obstacle object from the array
        this.enemies.splice(i, 1);
        // Update the counter variable to account for the removed obstacle
        i--;
      } // If the obstacle is off the screen (at the bottom)
      else if (obstacle.top > this.height) {
        // Increase the score by 1
        this.score++;
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

    // Hide game screen
    this.gameProper.style.display = "none";
    // Show end game screen
    this.endScreen.style.display = "block";
  }

  playAgain() {
    location.reload();
  }
}
