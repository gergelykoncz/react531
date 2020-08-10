import React from 'react';
import {View, StyleSheet} from 'react-native';
import {getLeftPlates, getRightPlates} from '../utils/barbellHelper';

export interface BarbellProps {
  weight: number;
}

export const Barbell = (props: BarbellProps) => {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    bar: {
      width: 100,
      height: 3,
      backgroundColor: 'black',
    },
    plate_20: {
      width: 4,
      height: 30,
      backgroundColor: 'black',
    },
    plate_15: {
      width: 4,
      height: 25,
      backgroundColor: 'black',
    },
    plate_10: {
      width: 3,
      height: 20,
      backgroundColor: 'black',
    },
    plate_5: {
      width: 3,
      height: 15,
      backgroundColor: 'black',
    },
    plate_2: {
      width: 2,
      height: 10,
      backgroundColor: 'black',
    },
    plate_1: {
      width: 2,
      height: 5,
      backgroundColor: 'black',
    },
    rightPlate: {
      marginRight: 1,
    },
    leftPlate: {
      marginLeft: 1,
    },
  });

  return (
    <View style={styles.container}>
      {getLeftPlates(props.weight).map((plate: string, index: number) => (
        <View key={index} style={[styles[plate], styles.leftPlate]}></View>
      ))}
      <View style={styles.bar}></View>
      {getRightPlates(props.weight).map((plate: string, index: number) => (
        <View key={index} style={[styles[plate], styles.rightPlate]}></View>
      ))}
    </View>
  );
};
