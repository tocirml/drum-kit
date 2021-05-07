export const playSound = keyCode => {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!audio) return;
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
};

export const onKeyUp = keyCode => {
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (!key) return;
  key.classList.remove('playing');
};
