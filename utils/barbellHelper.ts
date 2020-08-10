export const calculatePlates = (weight: number) => {
  const result = [];
  let half = (weight - 20) / 2;
  const plates = [20, 15, 10, 5, 2.5, 1.25];

  for (let i = 0; i < plates.length; i++) {
    while (half >= plates[i]) {
      result.push(plates[i]);
      half -= plates[i];
    }
  }

  return result;
};

export const plateMap = {
  20: 'plate_20',
  15: 'plate_15',
  10: 'plate_10',
  5: 'plate_5',
  2.5: 'plate_2',
  1.25: 'plate_1',
};

export const getRightPlates = (weight: number) =>
  calculatePlates(weight).map((res) => plateMap[res]);
export const getLeftPlates = (weight: number) =>
  calculatePlates(weight)
    .sort((a, b) => a - b)
    .map((res) => plateMap[res]);
