export const calculateTextOnPrimaryColor = (color?: string) => {
  if (!color) {
    return 'hsla(var(--hue), 50%, 99%, 1)';
  }
  if (color.length == 7) {
    color = color.substring(1);
  }
  const R = parseInt(color.substring(0, 2), 16);
  const G = parseInt(color.substring(2, 4), 16);
  const B = parseInt(color.substring(4, 6), 16);
  const brightness = Math.sqrt(R * R * 0.241 + G * G * 0.691 + B * B * 0.068);

  return `hsla(var(--hue), 50%, ${brightness < 135 ? 99 : 1}%, 1)`;
};
