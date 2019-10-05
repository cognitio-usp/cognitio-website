import { colorTertiary, colorPrimary } from '../style/theme';

let pos = 0;
const colors = [colorPrimary, colorTertiary, '#0070BD'];

export function pickRandomColor() {
  if (pos < colors.length) {
    return colors[pos++];
  }

  pos = 0;
  return colors[pos++];
}
