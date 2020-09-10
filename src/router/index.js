import {StyleSheet} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Akun, Jadwal} from '../pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Router = ({}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="MainApp"
      component={MainApp}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const MainApp = ({}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Jadwal" component={Jadwal} />
      <Tab.Screen name="Akun" component={Akun} />
    </Tab.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
