import React from 'react';
import { createStackNavigator, TransitionPresets, } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, getFocusedRouteNameFromRoute, useRoute  } from '@react-navigation/native';
import HomeScreen from '@screens/home';
import SearchScreen from '@screens/search';
import DetailsScreen from '@screens/details';
import VideoScreen from '@screens/video';
import OnboardingScreen from '@screens/onboarding';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import { Label, Title } from '@theme/global';

export default function Router() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false,}} initialRouteName='Onboarding'>
            <Stack.Screen name="Home" component={HomeScreen} options={{...TransitionPresets.ModalSlideFromBottomIOS ,  backBehavior: 'none',}}/>
            <Stack.Screen name="Details" component={DetailsScreen} options={{...TransitionPresets.ModalPresentationIOS ,  backBehavior: 'none',}}/>
            <Stack.Screen name="Video" component={VideoScreen} options={{...TransitionPresets.SlideFromRightIOS ,  backBehavior: 'none',}}/>
            <Stack.Screen name="Search" component={SearchScreen} options={{...TransitionPresets.ModalPresentationIOS ,  backBehavior: 'none',}}/>
            <Stack.Screen name="Account" component={SearchScreen} options={{...TransitionPresets.ModalPresentationIOS ,  backBehavior: 'none',}}/>
            <Stack.Screen name="Tabs" component={Tabs} options={{...TransitionPresets.ModalSlideFromBottomIOS  ,  backBehavior: 'none',}}/>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{...TransitionPresets.ModalSlideFromBottomIOS  ,  backBehavior: 'none',}}/>
        </Stack.Navigator>
    </NavigationContainer>
   );
}



function Tabs (){
  const route = useRoute();
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home'
    return (
        <Tab.Navigator initialRouteName="Home" 
            screenOptions={{
              headerShown: false,
              tabBarShowLabel: false,
              backBehavior: 'none',
              tabBarActiveTintColor: '#381E57',
              tabBarInactiveTintColor: '#ffffff70',
              tabBarStyle: {
                backgroundColor: '#2E2E2E90', 
                borderTopWidth: 0, 
                height: 64,
                paddingBottom: 12,
                paddingTop: 10,
                position: 'absolute',
                bottom: 16,
                borderRadius: 100,
                elevation: 0,
                left: 56, right: 56,
              },
            }}
            
            
            >
            <Tab.Screen name="Home" component={HomeScreen} options={{
            backBehavior: 'initialRoute',
            tabBarLabel: 'Início',
            tabBarItemStyle: {
              backgroundColor: routeName === 'Home' ? '#fff' : 'transparent',
              borderRadius: 100,
              marginLeft: 12,
            },
            
            tabBarIcon: ({ color, size }) => (
              <Title style={{ color: color, fontSize: 18, fontFamily: 'Font_Medium' }}>Início</Title>
            ),
        }}/>
           
           <Tab.Screen name="Search" component={SearchScreen}  options={{
            tabBarLabel: 'Buscar',
            tabBarItemStyle: {
              backgroundColor: routeName === 'Search' ? '#fff' : 'transparent',
              borderRadius: 100,
            },
            tabBarIcon: ({ color, size }) => (
              <Title style={{ color: color, fontSize: 18, fontFamily: 'Font_Medium' }}>Play</Title>
            ),
        }}/>
        
         <Tab.Screen name="Account" component={SearchScreen}  
            options={{
            tabBarLabel: 'Conta',
            tabBarItemStyle: {
              backgroundColor: routeName === 'Account' ? '#fff' : 'transparent',
              borderRadius: 100,
              marginRight: 12,
            },

            tabBarIcon: ({ color, size }) => (
              <Title style={{ color: color, fontSize: 18, fontFamily: 'Font_Medium' }}>Conta</Title>
            ),
        }}/>
        </Tab.Navigator>
    )
}