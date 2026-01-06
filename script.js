/* ----------  NAVEGACIÓN + AUDIO  ---------- */
const audios = {};
const buttons = {};
let currentAudio = null;

['2022', '2023', '2024', '2025'].forEach(y => {
  audios[y] = document.getElementById('audio' + y);
  buttons[y] = document.querySelector(`button[data-year="${y}"]`);
});

document.querySelectorAll('.play-year').forEach(btn => {
  btn.addEventListener('click', () => {
    const year = btn.dataset.year;
    toggleMusic(year);
  });
});

/* ----------  NIGHT SKY STARS  ---------- */
function createStars(count = 80) {
  const container = document.querySelector('.stars');
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 4}s`;
    container.appendChild(star);
  }
}
createStars();

/* ----------  AUDIO CONTROL  ---------- */
function toggleMusic(year, autoplay = false) {
  const audio = audios[year];
  const btn = buttons[year];

  if (currentAudio && currentAudio !== audio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  if (!autoplay && !audio.paused) {
    audio.pause();
    btn.textContent = '▶ Reproducir';
    currentAudio = null;
  } else {
    audio.volume = 0.25;
    audio.play().catch(() => {});
    btn.textContent = '❚❚ Pausar';
    currentAudio = audio;
  }
}