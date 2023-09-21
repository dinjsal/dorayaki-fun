class Spaceship {
  constructor(gameScreen, width, height, spaceshipPhoto) {
    this.gameScreen = gameScreen;
    this.width = width;
    this.height = height;
    this.spaceship = document.createElement("img");

    this.spaceship.src = spaceshipPhoto;
    this.spaceship.style.width = `${this.width}px`;
    this.spaceship.style.height = `${this.height}px`;

    this.gameScreen.appendChild(this.spaceship);
  }
}
