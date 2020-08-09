export const generateExercise = (max: number) => {
  return [
    {
      week: 1,
      sets: [
        {reps: 5, weight: max * 0.65},
        {reps: 5, weight: max * 0.75},
        {reps: 5, weight: max * 0.85},
      ],
    },
    {
      week: 2,
      sets: [
        {reps: 3, weight: max * 0.7},
        {reps: 3, weight: max * 0.8},
        {reps: 3, weight: max * 0.9},
      ],
    },
    {
      week: 3,
      sets: [
        {reps: 5, weight: max * 0.75},
        {reps: 3, weight: max * 0.85},
        {reps: 1, weight: max * 0.95},
      ],
    },
  ];
};
