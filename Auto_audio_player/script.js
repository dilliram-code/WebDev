const audio = document.getElementById('bg-music');
  const muteBtn = document.getElementById('mute-btn');

  let userInteracted = false;

  function tryPlayAudio() {
    if (!userInteracted) {
      userInteracted = true;

      audio.volume = 0.01; // Start very faint
      audio.play().then(() => {
        // Gradually increase volume to 0.5
        let targetVolume = 0.15;
        let step = 0.01;
        let interval = setInterval(() => {
          if (audio.volume < targetVolume && !audio.muted) {
            audio.volume = Math.min(audio.volume + step, targetVolume);
          } else {
            clearInterval(interval);
          }
        }, 200); // increase every 200ms
      }).catch(() => {
        console.log("Audio play was blocked");
      });
    }
  }

  // Trigger on first interaction
  document.addEventListener('click', tryPlayAudio, { once: true });
  document.addEventListener('scroll', tryPlayAudio, { once: true });

  // Mute/unmute toggle
  muteBtn.addEventListener('click', () => {
    audio.muted = !audio.muted;
    muteBtn.textContent = audio.muted ? '🔇' : '🔊';
  });