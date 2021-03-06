import React, {useRef} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export interface RepeatButtonProps {
  title: string;
  onPress: () => void;
}

export const RepeatButton = (props: RepeatButtonProps) => {
  const {title, onPress} = props;
  const timer = useRef(null);

  const pressIn = (timeout: number) => {
    onPress();
    timer.current = setTimeout(() => pressIn((timeout -= 10)), timeout);
  };

  const pressOut = () => {
    clearTimeout(timer.current);
  };

  const styles = StyleSheet.create({
    button: {
      backgroundColor: '#ff793f',
      borderRadius: 50,
      width: 50,
      height: 50,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: '#ffffff',
      fontSize: 30,
      fontWeight: 'bold',
    },
  });

  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPressIn={() => pressIn(200)}
        onPressOut={pressOut}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};
