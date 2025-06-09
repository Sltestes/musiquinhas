document.addEventListener("DOMContentLoaded", function () {
  const audioBoxes = document.querySelectorAll(".audio-box");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  let currentIndex = 0;

  function showAudio(index) {
    // Pausa todos os áudios antes de mudar
    document.querySelectorAll("audio").forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });

    audioBoxes.forEach((box, i) => {
      box.classList.toggle("active", i === index);
    });
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % audioBoxes.length;
    showAudio(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + audioBoxes.length) % audioBoxes.length;
    showAudio(currentIndex);
  });

  // Exibir a primeira música ao carregar
  showAudio(currentIndex);
});
