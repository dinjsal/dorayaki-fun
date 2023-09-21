class Spaceship {
  constructor(player, gameScreen) {
    this.player = document.createElement("img");
    this.gameScreen = gameScreen;

    this.player.src = "../images/doraemonPurpleSpaceship.png";
    this.gameScreen.appendChild(this.player);
  }
}
