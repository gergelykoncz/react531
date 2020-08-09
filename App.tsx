import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
  Text,
} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './redux/store';
import InputValues from './containers/InputValues';

const App = () => {
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
    paddingBottom: 20,
  },
  logo: {
    color: '#ffffff',
    fontSize: 30,
  },
  scrollView: {
    backgroundColor: '#f7f1e3',
  },
  container: {
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: 100,
  },
  inputBox: {
    marginBottom: 30,
  },
});

export default App;
