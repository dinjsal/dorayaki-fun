class SmilingDorayaki {
  constructor() {
    this.gameScreen = gameScreen;
    this.top = Math.floor(Math.random() * 100);
    this.width = width;
    this.height = height;
    this.smilingDorayaki = document.createElement("img");
    this.directionX = 0;

    this.enemy.src = "./images/smilingDorayaki.png";
    this.enemy.style.position = "relative";

    this.enemy.style.width = `${this.width}px`;
    this.enemy.style.height = `${this.height}px`;
    this.directionX = 0;

    this.gameScreen.appendChild(this.smilingDorayaki);
  }
}
