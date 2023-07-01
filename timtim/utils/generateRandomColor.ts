import tinycolor from 'tinycolor2';

const colors = [
  '#7237B7',
  '#171D1C',
  '#E56B70',
  '#20BF55',
  '#01BAEF',
  '#E5F4E3',
  '##D4E09B',
  '#6FFFE9',
  '#AFD5AA',
  '#CCD6EB',
  '#CCFF66',
  '#FF6666',
  '#E55812',
  '#95C623',
];

export function generateRandomColor(): string {
  let newColor;
  let brightness;

  do {
    // Select a random color from your palette
    const randomIndex = Math.floor(Math.random() * colors.length);
    const baseColor = tinycolor(colors[randomIndex]);

    // Get an analogous color scheme
    const analogousColors = baseColor.analogous();

    // Select a random color from the analogous color scheme
    const randomSchemeIndex = Math.floor(Math.random() * analogousColors.length);
    newColor = analogousColors[randomSchemeIndex];

    // Brighten the color
    newColor = newColor.brighten(30); // Adjust the brightening as needed

    // Get brightness of the new color
    brightness = newColor.getBrightness();

    // Loop until we get a color that's neither too dark nor too light
  } while (brightness < 20 || brightness > 235);

  return newColor.toString();
}
