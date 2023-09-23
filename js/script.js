window.addEventListener("load", () => {
  const dorayakiStart = document.querySelector("#dorayaki-start");
  const dorayakiRestart = document.querySelector("#dorayaki-restart");
  let play;

  dorayakiStart.addEventListener("click", () => {
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
    } else if (event.key === "ArrowRight") {
      play.spaceship.directionX = 5;
    }
  });

  dorayakiRestart.addEventListener("click", () => {
    play.playAgain();
  });
});
