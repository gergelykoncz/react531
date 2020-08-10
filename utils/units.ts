const round = (value: number, step: number) => {
  step || (step = 1.0);
  var inv = 1.0 / step;
  return Math.round(value * inv) / inv;
};

export const toPound = (kg: number) => {
  return round(kg * 2.2, 5);
};

export const toKg = (lb: number) => {
  return round(lb / 2.2, 2.5);
};
