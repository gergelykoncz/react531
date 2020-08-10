import React, {useState} from 'react';
import {Modal, Text, StyleSheet, View} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';

export interface BarbellModalProps {
  plates: number[];
  modalVisible: boolean;
  onClose: () => void;
}

export const BarbellModal = (props: BarbellModalProps) => {
  const {plates, modalVisible, onClose} = props;

  const processArray = (plates: number[]) => {
    const result: any = [];
    plates.forEach((plate) => {
      if (!result[plate]) {
        result[plate] = 2;
      } else {
        result[plate] += 2;
      }
    });

    return result;
  };

  const plateResult = processArray(plates);

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Plates</Text>

            {Object.keys(plateResult).map((key: string, index: number) => (
              <Text key={index}>
                {plateResult[key]} X {key}
              </Text>
            ))}

            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={() => {
                onClose();
              }}>
              <Text style={styles.textStyle}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
