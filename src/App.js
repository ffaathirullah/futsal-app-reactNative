import {NavigationContainer} from '@react-navigation/native';
import {View, Text} from 'react-native';
import * as React from 'react';
import Router from './router';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

export default App;
