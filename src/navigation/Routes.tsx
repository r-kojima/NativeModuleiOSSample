import React, {memo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from 'src/screens/HomeScreen';

import Routes from './routesNames';

const Stack = createStackNavigator();

const BottomNavigationContainer = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.HOME}
      screenOptions={{headerTintColor: 'red'}}>
      <Stack.Screen name={Routes.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
};

const MainRouter = (): JSX.Element => {
  return (
    <NavigationContainer>
      <BottomNavigationContainer />
    </NavigationContainer>
  );
};

export default memo(MainRouter);
