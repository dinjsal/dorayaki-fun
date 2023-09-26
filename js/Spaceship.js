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
    const doraemonPlayer = this.spaceship.getBoundingClientRect(); //rectangle
    let mouseDorayaki;
    if (enemy.mouse) {
      mouseDorayaki = enemy.mouse.getBoundingClientRect();
    } else {
      mouseDorayaki = enemy.smilingD.getBoundingClientRect();
    }

    if (
      doraemonPlayer.left < mouseDorayaki.right &&
      doraemonPlayer.right > mouseDorayaki.left &&
      doraemonPlayer.top < mouseDorayaki.bottom &&
      doraemonPlayer.bottom > mouseDorayaki.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
