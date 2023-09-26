class Spaceship {
  constructor(gameScreen, left, top, width, height, spaceshipPhoto) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.spaceship = document.createElement("img");

    this.spaceship.src = spaceshipPhoto;
    this.spaceship.style.left = `${this.left}px`;
    this.spaceship.style.top = `${this.top}px`;
    this.spaceship.style.position = "absolute";
    this.spaceship.style.width = `${this.width}px`;
    this.spaceship.style.height = `${this.height}px`;

    this.gameScreen.appendChild(this.spaceship);
  }

  move() {
    this.left += this.directionX;

    if (this.left < 8) {
      this.left = 8;
    }

    if (this.left > this.gameScreen.offsetWidth - this.width - 8) {
      this.left = this.gameScreen.offsetWidth - this.width - 8;
    }

    this.updatePosition();
  }

  updatePosition() {
    this.spaceship.style.left = `${this.left}px`;
    this.spaceship.style.top = `${this.top}px`;
  }

  touchWith(enemy) {
    console.log(enemy);
    const playerRect = this.spaceship.getBoundingClientRect();
    let obstacleRect;
    if (enemy.mouse) {
      obstacleRect = enemy.mouse.getBoundingClientRect();
    } else {
      obstacleRect = enemy.smilingD.getBoundingClientRect();
    }

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
