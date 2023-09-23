class Play {
  constructor(startScreen, gameProper, endScreen) {
    this.startScreen = document.querySelector("#start-screen");
    this.gameProper = document.querySelector("#game-proper");
    this.gameScreen = document.querySelector("#game-screen");
    this.endScreen = document.querySelector("#end-screen");
    this.score = 0;
    this.lives = 3;
    this.endGame = false;
    this.width = 1000;
    this.height = 500;
    this.spaceship = new Spaceship(
      this.gameScreen,
      0,
      400,
      100,
      100,
      "./images/doraemonPurpleSpaceship.png"
    );
    this.enemy = [];
    this.smilingDorayaki = [];

    this.gameScreen.style.width = `${this.width}px`;
    this.gameScreen.style.height = `${this.height}px`;
  }

  gameStart() {
    this.startScreen.style.display = "none";
    this.gameProper.style.display = "block";
    this.gameScreen.style.display = "block";
    this.endScreen.style.display = "none";
  }

  slideSideways() {
    setInterval(() => {
      this.spaceship.left++;
      this.spaceship.style.left = `${this.left}px`;
    }, 100);
  }

  //handle the size of the game-screen

  appearEnemy() {}

  appearSmilingDorayaki() {}

  restartGame() {
    location.reload;
  }
}
