class SmilingDorayaki {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.left = Math.floor(Math.random() * 300 + 100);
    this.top = 8;
    this.width = 50;
    this.height = 80;
    this.smilingD = document.createElement("img");

    this.smilingD.src = "./images/smilingDorayaki.png";
    this.smilingD.style.position = "absolute";
    this.smilingD.style.width = `${this.width}px`;
    this.smilingD.style.height = `${this.height}px`;
    this.smilingD.style.top = `${this.top}px`;

    this.gameScreen.appendChild(this.smilingD);
  }

  move() {
    this.top += 5;
    this.updatePosition();
  }

  updatePosition() {
    this.smilingD.style.left = `${this.left}px`;
    this.smilingD.style.top = `${this.top}px`;
  }
}
