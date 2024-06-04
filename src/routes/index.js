import React from 'react';
import { createStackNavigator, TransitionPresets, } from '@react-navigation/stack';
import { NavigationContainer, getFocusedRouteNameFromRoute, useRoute  } from '@react-navigation/native';
import HomePage from '@screens/home';
const Stack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false,}} initialRouteName='AsyncStatic'>
            <Stack.Screen name="Home" component={HomePage} options={{...TransitionPresets.ModalSlideFromBottomIOS ,  backBehavior: 'none',}}/>

        </Stack.Navigator>
    </NavigationContainer>
   );
}
