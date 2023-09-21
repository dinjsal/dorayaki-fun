window.onload = function () {
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
};
