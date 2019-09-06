import { colorTertiary, colorPrimary } from '../style/theme';

let usedColors: string[] = [];
const colors = [colorPrimary, colorTertiary, '#0070BD'];

export function pickRandomColor() {
  const notUsedColors = colors.filter(item => !usedColors.includes(item));

  if (notUsedColors.length === 0) {
    usedColors = [];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  const color = notUsedColors[Math.floor(Math.random() * notUsedColors.length)];
  usedColors = [...usedColors, color];
  return color;
}
