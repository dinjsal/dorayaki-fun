class Spaceship {
  constructor(gameScreen, left, marginTop, width, height, spaceshipPhoto) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.marginTop = marginTop;
    this.width = width;
    this.height = height;
    this.spaceship = document.createElement("img");

    this.spaceship.src = spaceshipPhoto;
    this.spaceship.style.left = `${this.left}px`;
    this.spaceship.style.marginTop = `${this.marginTop}px`;
    this.spaceship.style.position = "relative";
    this.spaceship.style.width = `${this.width}px`;
    this.spaceship.style.height = `${this.height}px`;
    this.spaceship.style.directionX = `${this.directionX}px`;

    this.gameScreen.appendChild(this.spaceship);
  }
}
