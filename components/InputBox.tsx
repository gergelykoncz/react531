import React, {useRef} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from 'react-native';
import {RepeatButton} from './RepeatButton';

export interface InputBoxProps {
  title: string;
  value: number;
  step?: number;
  min?: number;
  max?: number;
  style?: StyleProp<ViewStyle>;
  onValueChange: (e: number) => void;
}

export const InputBox = (props: InputBoxProps) => {
  const {onValueChange, value} = props;

  const valueRef = useRef(value);
  valueRef.current = value;

  const step = props.step || 2.5;
  const min = props.min || 0;
  const max = props.max || 1000;

  const decrement = () => {
    const newValue = Math.max(min, valueRef.current - step);
    onValueChange(newValue);
  };

  const increment = () => {
    const newValue = Math.min(max, valueRef.current + step);
    onValueChange(newValue);
  };

  const change = (e: string) => {
    const num = parseInt(e);

    if (isNaN(num)) {
      return false;
    } else if (num > max || num < min) {
      return false;
    } else {
      onValueChange(num);
    }
  };

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#ffffff',
      borderRadius: 50,
    },
    title: {
      color: '#ff793f',
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    textBox: {
      textAlign: 'center',
      flexGrow: 1,
      flexShrink: 0,
      fontSize: 30,
    },
  });

  return (
    <>
      <View style={props.style}>
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.container}>
          <RepeatButton title="-" onPress={decrement}></RepeatButton>
          <TextInput
            style={styles.textBox}
            keyboardType="numeric"
            value={value.toString()}
            onChangeText={change}></TextInput>
          <RepeatButton title="+" onPress={increment}></RepeatButton>
        </View>
      </View>
    </>
  );
};
