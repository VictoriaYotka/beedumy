const splitText = (text) => {
  const sentences = text.split(/(?<=[.!?])\s+/);
  return sentences;
};

export default splitText;
