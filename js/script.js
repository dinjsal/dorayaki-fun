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
      play.spaceship.style = `${this.left}px`;
    } else if (event.key === "ArrowRight") {
      //fsdfdfsd
    } else {
      alert`Only left and right keys allowed!`;
    }
  });

  dorayakiRestart.addEventListener("click", () => {
    play.restartGame();
  });
});
