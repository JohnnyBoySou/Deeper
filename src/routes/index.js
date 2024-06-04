import React from 'react';
import { createStackNavigator, TransitionPresets, } from '@react-navigation/stack';
import { NavigationContainer, getFocusedRouteNameFromRoute, useRoute  } from '@react-navigation/native';
import HomeScreen from '@screens/home';
import SearchScreen from '@screens/search';
const Stack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false,}} initialRouteName='Home'>
            <Stack.Screen name="Home" component={HomeScreen} options={{...TransitionPresets.ModalSlideFromBottomIOS ,  backBehavior: 'none',}}/>
            <Stack.Screen name="Search" component={SearchScreen} options={{...TransitionPresets.ModalPresentationIOS ,  backBehavior: 'none',}}/>
        </Stack.Navigator>
    </NavigationContainer>
   );
}
