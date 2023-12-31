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
      320,
      385,
      70,
      110,
      "./images/doraemonSpaceship.png"
    );
    this.enemies = [];
    this.points = [];
    this.endGameSound = new Audio("../audio/wonk-wonk-wonk-sound.mp3");
    this.mouseSound = new Audio("../audio/mouse-6821.mp3");
    this.dorayakiSound = new Audio("../audio/news-ting-6832.mp3");
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

    const score = document.querySelector("#total-points");

    for (let i = 0; i < this.enemies.length; i++) {
      const obstacle = this.enemies[i];
      obstacle.move();

      if (obstacle.top > this.height - obstacle.height) {
        this.score += Math.floor(Math.random() * 10);
        score.innerText = this.score;
        obstacle.mouse.remove();
        this.enemies.splice(i, 1);
        i--;
      } else if (this.spaceship.touchWith(obstacle)) {
        this.mouseSound.play();
        alert`You lose :(`;
        this.finishGame();
      }
    }

    if (Math.random() > 0.95 && this.enemies.length < 1) {
      this.enemies.push(new Enemy(this.gameScreen));
    }

    for (let j = 0; j < this.points.length; j++) {
      const dorayaki = this.points[j];
      dorayaki.move();

      if (this.spaceship.touchWith(dorayaki)) {
        this.score += 10;
        score.innerText = this.score;
        this.dorayakiSound.play();
        dorayaki.smilingD.remove();
        this.points.splice(j, 1);
        j--;
      } else if (dorayaki.top > this.height - dorayaki.height) {
        dorayaki.smilingD.remove();
        this.points.splice(j, 1);
        j--;
      }
    }

    if (Math.random() > 0.95 && this.points.length < 1) {
      this.points.push(new SmilingDorayaki(this.gameScreen));
    }
  }

  finishGame() {
    this.endGame = true;
    this.endGameSound.play();
    const endTotalPoints = document.querySelector("#end-points");
    endTotalPoints.innerText = this.score;

    const bestScoreElement = document.querySelector("#best-score");

    const endScore = localStorage.getItem("bestScore");

    if (this.score > endScore) {
      localStorage.setItem("bestScore", this.score);
      bestScoreElement.innerText = this.score;
    } else {
      bestScoreElement.innerText = endScore;
    }

    this.gameProper.style.display = "none";
    this.endScreen.style.display = "block";
  }

  playAgain() {
    location.reload();
  }
}
