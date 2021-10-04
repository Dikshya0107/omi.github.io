document.addEventListener("click" ,function(e){
    if(e.target.classList.contains("gallery-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src =src;
        const myModal = new bootstrap.Modal(document.getElementById("gallery-modal"));
        myModal.show();
    }
});

const startit = () => {
    setTimeout(function () {
      console.log("start");
      confetti.start();
    }, 1000);
  };

  const stopit = () => {
    setTimeout(function () {
      console.log("stop");
      confetti.stop();
    }, 6000);
  };

  startit();
  stopit();

