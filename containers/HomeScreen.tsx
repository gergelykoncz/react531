import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import InputValues from './InputValues';

export const HomeScreen = ({navigation}) => {
  const navigate = () => {
    navigation.navigate('Programme');
  };

  const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: '#f7f1e3',
    },
  });

  return (
    <>
      <ScrollView style={styles.scrollView}>
        <InputValues onFinished={() => navigate()} />
      </ScrollView>
    </>
  );
};
