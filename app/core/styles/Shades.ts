// darken(1 / 8) === 'rgba(0, 0, 0, 0.125)'
const darken = (dark: number) => `rgba(0, 0, 0, ${dark}`;

const shades = [
  darken(0),
  darken(1 / 8),
  darken(1 / 4),
  darken(3 / 8),
  darken(1 / 2),
  darken(5 / 8),
  darken(3 / 4),
  darken(7 / 8),
  darken(1)
];

export default shades;
