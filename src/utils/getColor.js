export function generateColorByNumber(number) {
  // Начальные значения цвета (R, G, B)
  let r = 240,
    g = 200,
    b = 20;

  // Вычисляем значения компонентов цвета
  r -= (number * 10) % 256;
  g -= (number * 20) % 256;
  b -= (number * 30) % 256;

  // Преобразуем компоненты цвета в формат RGB
  return `rgb(${r}, ${g}, ${b})`;
}
