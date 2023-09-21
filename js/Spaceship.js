class Spaceship {
  constructor(gameScreen, marginTop, width, height, spaceshipPhoto) {
    this.gameScreen = gameScreen;
    this.width = width;
    this.height = height;
    this.marginTop = marginTop;
    this.spaceship = document.createElement("img");

    this.spaceship.src = spaceshipPhoto;
    this.spaceship.style.marginTop = `${this.marginTop}px`;
    this.spaceship.style.width = `${this.width}px`;
    this.spaceship.style.height = `${this.height}px`;

    this.gameScreen.appendChild(this.spaceship);
  }
}
