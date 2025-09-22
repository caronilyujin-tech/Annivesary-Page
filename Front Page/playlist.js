

    document.addEventListener("DOMContentLoaded", function () {
      for( let i=1; i<=12; i++){
      const audio = document.getElementById("trackaudio" + i);
      const playPauseBtn = document.getElementById("play-pause" + i);
      const seekBar = document.getElementById("seek-bar" + i);
      const currentTime = document.getElementById("current-time" + i);
      const duration = document.getElementById("duration" + i );
      if (!audio || !playPauseBtn || !seekBar || !currentTime || !duration) continue;

      audio.volume = 1;
      audio.muted = false;

      playPauseBtn.addEventListener("click", function () {
        if (audio.paused) {
          audio.play();
        } else {
          audio.pause();
        }
      });

      audio.addEventListener("play", function () {
        playPauseBtn.textContent="Pause";
      });
      audio.addEventListener("pause",function(){
        playPauseBtn.textContent="Play";
      });

      audio.addEventListener("loadedmetadata", function () {
        duration.textContent = formatTime(audio.duration);
        seekBar.max = Math.floor(audio.duration);
      });

      audio.addEventListener("timeupdate", function () {
        seekBar.value = Math.floor(audio.currentTime);
        currentTime.textContent = formatTime(audio.currentTime);
      });

      seekBar.addEventListener("input", function () {
        audio.currentTime = seekBar.value;
      });

      function formatTime(seconds) {
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return min + ":" + (sec < 10 ? "0" : "") + sec;
      }}
    });
  