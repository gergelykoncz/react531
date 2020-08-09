import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { InputBox } from '../components/InputBox';
import { store, counterSlice } from '../redux/store'

const InputValues = () => {
  const military = useSelector(state => state.military);
  const deadlift = useSelector(state => state.deadlift);
  const bench = useSelector(state => state.bench);
  const squat = useSelector(state => state.squat);

  const { increment } = counterSlice.actions;

  const stateChange = (id: string, value: number) => {
    store.dispatch(increment({id, value}));
  }

  return (
    <>
      <View style={styles.container}>
        <InputBox value={military} onValueChange={e => stateChange('military', e)} style={styles.inputBox} title="Military Press"></InputBox>
          <InputBox value={deadlift} onValueChange={e => stateChange('deadlift', e)} style={styles.inputBox} title="Deadlift"></InputBox>
          <InputBox value={bench} onValueChange={e => stateChange('bench', e)} style={styles.inputBox} title="Bench Press"></InputBox>
          <InputBox value={squat} onValueChange={e => stateChange('squat', e)} style={styles.inputBox} title="Squat"></InputBox>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: 100
  },
  inputBox: {
    marginBottom: 30
  }
});

export default InputValues;
