document.addEventListener('DOMContentLoaded', function () {
    var audio = new Audio('music/The Stars Keep On Calling My Name.mp3');
    var playPauseBtn = document.getElementById('playPauseBtn');
    var stopBtn = document.getElementById('stopBtn');
    var scrollingText = document.getElementById('scrollingText');
  
    playPauseBtn.addEventListener('click', function () {
      if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = 'Pause';
        scrollingText.classList.add('scrolling-animation');
      } else {
        audio.pause();
        playPauseBtn.textContent = 'Play';
        scrollingText.classList.remove('scrolling-animation');
      }
    });
  
    stopBtn.addEventListener('click', function () {
      audio.pause();
      audio.currentTime = 0;
      playPauseBtn.textContent = 'Play';
      scrollingText.classList.remove('scrolling-animation');
    });
  });
  