export const calculatePlates = (weight: number, isPound: boolean) => {
  const result = [];
  let half;
  if (isPound) {
    half = (weight - 45) / 2;
  } else {
    half = (weight - 20) / 2;
  }
  let plates;

  if (isPound) {
    plates = [45, 35, 25, 10, 5, 2.5];
  } else {
    plates = [20, 15, 10, 5, 2.5, 1.25];
  }

  for (let i = 0; i < plates.length; i++) {
    while (half >= plates[i]) {
      result.push(plates[i]);
      half -= plates[i];
    }
  }

  return result;
};

export const kgPlateMap = {
  20: 'plate_20',
  15: 'plate_15',
  10: 'plate_10',
  5: 'plate_5',
  2.5: 'plate_2',
  1.25: 'plate_1',
};

export const lbPlateMap = {
  45: 'plate_20',
  35: 'plate_15',
  25: 'plate_10',
  10: 'plate_5',
  5: 'plate_2',
  2.5: 'plate_1',
};

export const getRightPlates = (weight: number, isPound: boolean) =>
  calculatePlates(weight, isPound).map((res) =>
    isPound ? lbPlateMap[res] : kgPlateMap[res],
  );
export const getLeftPlates = (weight: number, isPound: boolean) =>
  calculatePlates(weight, isPound)
    .sort((a, b) => a - b)
    .map((res) => (isPound ? lbPlateMap[res] : kgPlateMap[res]));
