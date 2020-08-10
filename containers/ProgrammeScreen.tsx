import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {ExerciseProgramme} from '../components/ExerciseProgramme';
import {ScrollView} from 'react-native-gesture-handler';

export const ProgrammeScreen = () => {
  const military = useSelector((state: RootState) => state.programme.military);
  const deadlift = useSelector((state: RootState) => state.programme.deadlift);
  const bench = useSelector((state: RootState) => state.programme.bench);
  const squat = useSelector((state: RootState) => state.programme.squat);

  return (
    <>
      <ScrollView>
        <ExerciseProgramme name="Military Press" training={military} />
        <ExerciseProgramme name="Deadlift" training={deadlift} />
        <ExerciseProgramme name="Bench Press" training={bench} />
        <ExerciseProgramme name="Squat" training={squat} />
      </ScrollView>
    </>
  );
};
