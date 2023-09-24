window.addEventListener("load", () => {
  const dorayakiStart = document.querySelector("#dorayaki-start");
  const dorayakiRestart = document.querySelector("#dorayaki-restart");
  const bellSound = new Audio("../audio/mixkit-achievement-bell-600.wav");
  const spaceshipSound = new Audio("../audio/ufo-flies-away-101315.mp3");
  let play;

  dorayakiStart.addEventListener("click", () => {
    bellSound.play();
    playGame();
  });

  function playGame() {
    play = new Play();
    play.gameStart();
  }

  //keydown event
  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      play.spaceship.directionX = -5;
      spaceshipSound.play();
    } else if (event.key === "ArrowRight") {
      play.spaceship.directionX = 5;
      spaceshipSound.play();
    }
  });

  dorayakiRestart.addEventListener("click", () => {
    play.playAgain();
  });
});
