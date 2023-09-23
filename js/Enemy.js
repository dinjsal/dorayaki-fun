class Enemy {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.left = Math.floor(Math.random() * 300 + 70);
    this.top = 8;
    this.width = 50;
    this.height = 80;
    this.mouse = document.createElement("img");

    this.mouse.src = "./images/mouse.png";
    this.mouse.style.position = "absolute";
    this.mouse.style.width = `${this.width}px`;
    this.mouse.style.height = `${this.height}px`;
    this.mouse.style.height = `${this.height}px`;
    this.mouse.style.top = `${this.top}px`;

    this.gameScreen.appendChild(this.mouse);
  }

  move() {
    this.top += 8;
    this.updatePosition();
  }

  updatePosition() {
    this.mouse.style.left = `${this.left}px`;
    this.mouse.style.top = `${this.top}px`;
  }
}
