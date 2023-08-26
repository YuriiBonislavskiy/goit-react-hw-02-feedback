export const capitalize = (str,delemitter) => {
  if (typeof str === 'string') {
    return str
      .split(' ')
      .map(word => {
        return `${word[0].toUpperCase()}${word.slice(1, word.length)}`;
      })
      .join(delemitter && delemitter);
  }
  return str;
}
