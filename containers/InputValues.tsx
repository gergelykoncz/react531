import React from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {InputBox} from '../components/InputBox';
import {store, inputSlice, programmeSlice, RootState} from '../redux/store';
import {Barbell} from '../components/Barbell';
import Swiper from 'react-native-swiper';
import {Switch} from 'react-native-gesture-handler';

export interface InputValuesProps {
  onFinished: () => void;
}

const InputValues = (props: InputValuesProps) => {
  const military = useSelector((state: RootState) => state.counter.military);
  const deadlift = useSelector((state: RootState) => state.counter.deadlift);
  const bench = useSelector((state: RootState) => state.counter.bench);
  const squat = useSelector((state: RootState) => state.counter.squat);
  const isPound = useSelector((state: RootState) => state.counter.isPound);

  const {increment, setPound} = inputSlice.actions;
  const {calculate} = programmeSlice.actions;

  const stateChange = (id: string, value: number) => {
    store.dispatch(increment({id, value}));
  };

  const {onFinished} = props;

  const calculateProgramme = () => {
    store.dispatch(
      calculate({
        military,
        deadlift,
        bench,
        squat,
      }),
    );
    onFinished();
  };

  const changePound = (e: boolean) => {
    store.dispatch(setPound({value: e}));
  };

  return (
    <>
      <View style={styles.container}>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          ios_backgroundColor="#3e3e3e"
          onValueChange={changePound}
          value={isPound}
        />
        <Swiper loop={false} showsPagination={true}>
          <View>
            <InputBox
              value={military}
              onValueChange={(e) => stateChange('military', e)}
              style={styles.inputBox}
              title="Military Press"></InputBox>
            <Barbell weight={military} isPound={isPound}></Barbell>
          </View>

          <View>
            <InputBox
              value={deadlift}
              onValueChange={(e) => stateChange('deadlift', e)}
              style={styles.inputBox}
              title="Deadlift"></InputBox>
            <Barbell weight={deadlift} isPound={isPound}></Barbell>
          </View>

          <View>
            <InputBox
              value={bench}
              onValueChange={(e) => stateChange('bench', e)}
              style={styles.inputBox}
              title="Bench Press"></InputBox>
            <Barbell weight={bench} isPound={isPound}></Barbell>
          </View>

          <View>
            <InputBox
              value={squat}
              onValueChange={(e) => stateChange('squat', e)}
              style={styles.inputBox}
              title="Squat"></InputBox>
            <Barbell weight={squat} isPound={isPound}></Barbell>
          </View>
        </Swiper>
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
    marginTop: 50,
  },
  inputBox: {
    marginBottom: 30,
  },
});

export default InputValues;
