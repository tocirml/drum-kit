import { useEffect } from 'react';
import { keys } from '../data/drumData';
import DrumButton from './DrumButton';
import AudioElement from './AudioElement';
import { playSound, onKeyUp } from '../utils/playSound';

const DrumKeyboard = () => {
  useEffect(() => {
    window.addEventListener('keydown', e => {
      playSound(e.keyCode);
    });
    window.addEventListener('keyup', e => {
      onKeyUp(e.keyCode);
    });
  }, []);

  return (
    <main className="main">
      <h1>Drum Keys</h1>
      <div className="keyboard-container">
        {keys.map(key => (
          <DrumButton
            key={key.id}
            keyboardInput={key.keyboardInput}
            sound={key.sound}
            dataKey={key.dataKey}
          />
        ))}
      </div>
      <div className="audio-container">
        {keys.map(key => (
          <AudioElement key={key.id} sound={key.sound} dataKey={key.dataKey} />
        ))}
      </div>
    </main>
  );
};

export default DrumKeyboard;
