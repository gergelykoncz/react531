import React from 'react';
import {Training, WorkingSet} from '../redux/programmeSlice';
import {Text, View} from 'react-native';

export interface ExerciseProgrammeProps {
  training: Training[];
  name: string;
}

export const ExerciseProgramme = (props: ExerciseProgrammeProps) => {
  const {training, name} = props;

  return (
    <>
      <Text>{name}</Text>
      {training.map((val: Training) => (
        <>
          <Text>Week {val.week}</Text>
          {val.sets.map((set: WorkingSet) => (
            <View style={{flexDirection: 'row'}}>
              <Text>Reps {set.reps}</Text>
              <Text>Weight {set.weight}</Text>
            </View>
          ))}
        </>
      ))}
    </>
  );
};
