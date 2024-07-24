export const COLORS = ['#C650DA', '#FF4BB0', '#FF6C84', '#FF9C62', '#FFCC56', '#F9F871'];
export function getRandomColor() {
  return COLORS[Math.round(Math.random() * (COLORS.length - 1))];
}
