import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, StatusBar, View, Text} from 'react-native';
import {store} from './redux/store';
import {HomeScreen} from './containers/HomeScreen';
import {ProgrammeScreen} from './containers/ProgrammeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.header}>
          <Text style={styles.logo}>5/3/1 App</Text>
        </View>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
          <Stack.Screen
            name="Programme"
            component={ProgrammeScreen}></Stack.Screen>
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
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
