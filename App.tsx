/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
  Text,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { InputBox } from './components/InputBox';
import InputValues from './containers/InputValues';

const App = () => {
  const mpChange = (e: number) => {
    console.log('mpChange', e);
  }

  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.header}>
          <Text style={styles.logo}>5/3/1 App</Text>
          </View>
        <SafeAreaView>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
              <InputValues />
            </ScrollView>
          </SafeAreaView>
        </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#cd6133',
    height: 120,
    display: 'flex',
    justifyContent: 'flex-end',
    paddingLeft: 20,
    paddingBottom: 20
  },
  logo: {
    color: '#ffffff',
    fontSize: 30
  },
  scrollView: {
    backgroundColor: '#f7f1e3',
  },
  container: {
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: 100
  },
  inputBox: {
    marginBottom: 30
  }
});

export default App;
