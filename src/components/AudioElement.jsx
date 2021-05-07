const AudioElement = ({ sound, dataKey }) => {
  return <audio src={`/sounds/${sound}.wav`} data-key={dataKey}></audio>;
};

export default AudioElement;
