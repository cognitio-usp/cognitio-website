import { colorTertiary, colorPrimary } from '../style/theme';

export function pickRandomColor() {
  const colors = [colorPrimary, colorTertiary, '#0070BD'];
  return colors[Math.floor(Math.random() * colors.length)];
}
