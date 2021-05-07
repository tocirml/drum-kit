const DrumButton = ({ keyboardInput, sound, handleClick, dataKey }) => {
  return (
    <div className="key" data-key={dataKey}>
      <kbd>{keyboardInput}</kbd>
      <span className="sound">{sound.toUpperCase()}</span>
    </div>
  );
};

export default DrumButton;
