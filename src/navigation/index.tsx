import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import * as screen from "../pages";

const Navigation = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={screen.Splash} />
        <Stack.Screen name="Main" component={screen.Main} />
        <Stack.Screen name="About" component={screen.About} />
      </Stack.Navigator>
  );
};

export default Navigation;