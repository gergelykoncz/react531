import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  getLeftPlates,
  getRightPlates,
  calculatePlates,
} from '../utils/barbellHelper';
import {BarbellModal} from './BarbellModal';
import {TouchableOpacity} from 'react-native-gesture-handler';

export interface BarbellProps {
  weight: number;
  isPound: boolean;
}

export const Barbell = (props: BarbellProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const showBar = () => {
    return props.isPound ? props.weight >= 45 : props.weight >= 20;
  };

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
      width: 5,
      height: 40,
      backgroundColor: 'black',
      borderRadius: 5,
    },
    plate_15: {
      width: 3,
      height: 30,
      backgroundColor: 'black',
      borderRadius: 5,
    },
    plate_10: {
      width: 3,
      height: 25,
      backgroundColor: 'black',
      borderRadius: 5,
    },
    plate_5: {
      width: 3,
      height: 20,
      backgroundColor: 'black',
      borderRadius: 5,
    },
    plate_2: {
      width: 3,
      height: 15,
      backgroundColor: 'black',
      borderRadius: 5,
    },
    plate_1: {
      width: 3,
      height: 10,
      backgroundColor: 'black',
      borderRadius: 5,
    },
    rightPlate: {
      marginRight: 1,
    },
    leftPlate: {
      marginLeft: 1,
    },
  });

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setModalVisible(true)}>
        {getLeftPlates(props.weight, props.isPound).map(
          (plate: string, index: number) => (
            <View key={index} style={[styles[plate], styles.leftPlate]}></View>
          ),
        )}
        {showBar() && <View style={styles.bar}></View>}
        {getRightPlates(props.weight, props.isPound).map(
          (plate: string, index: number) => (
            <View key={index} style={[styles[plate], styles.rightPlate]}></View>
          ),
        )}
      </TouchableOpacity>
      <BarbellModal
        modalVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        plates={calculatePlates(props.weight, props.isPound)}></BarbellModal>
    </>
  );
};
