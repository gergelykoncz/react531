import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {useSelector} from 'react-redux';
import {InputBox} from '../components/InputBox';
import {store, inputSlice, programmeSlice, RootState} from '../redux/store';

const InputValues = () => {
  const military = useSelector((state: RootState) => state.counter.military);
  const deadlift = useSelector((state: RootState) => state.counter.deadlift);
  const bench = useSelector((state: RootState) => state.counter.bench);
  const squat = useSelector((state: RootState) => state.counter.squat);

  const {increment} = inputSlice.actions;
  const {calculate} = programmeSlice.actions;

  const stateChange = (id: string, value: number) => {
    store.dispatch(increment({id, value}));
  };

  const calculateProgramme = () => {
    store.dispatch(
      calculate({
        military,
        deadlift,
        bench,
        squat,
      }),
    );
  };

  return (
    <>
      <View style={styles.container}>
        <InputBox
          value={military}
          onValueChange={(e) => stateChange('military', e)}
          style={styles.inputBox}
          title="Military Press"></InputBox>
        <InputBox
          value={deadlift}
          onValueChange={(e) => stateChange('deadlift', e)}
          style={styles.inputBox}
          title="Deadlift"></InputBox>
        <InputBox
          value={bench}
          onValueChange={(e) => stateChange('bench', e)}
          style={styles.inputBox}
          title="Bench Press"></InputBox>
        <InputBox
          value={squat}
          onValueChange={(e) => stateChange('squat', e)}
          style={styles.inputBox}
          title="Squat"></InputBox>
        <Button
          title="Calculate Programme"
          onPress={() => calculateProgramme()}></Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: 100,
  },
  inputBox: {
    marginBottom: 30,
  },
});

export default InputValues;
