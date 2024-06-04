import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React, { useCallback, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native';
import Router from './src/routes/index';
import dark from '@theme/dark';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try{
        await Font.loadAsync({
          Font_Book: require('@fonts/Pier-Book.otf'),
          Font_Medium: require('@fonts/Pier-Medium.otf'),
          Font_Bold: require('@fonts/Pier-Bold.otf'),
          Font_Regular: require('@fonts/Pier-Regular.otf'),
          Rox_Book: require('@fonts/Rox-Book.otf'),
          Rox_Medium: require('@fonts/Rox-Medium.otf'),
          Rox_Bold: require('@fonts/Rox-Bold.otf'),
          Rox_Regular: require('@fonts/Rox-Regular.otf'),
        });
      }catch (e) {
        console.warn(e);
      }finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <ThemeProvider theme={dark}>
        <Router />
      </ThemeProvider>
    </View>
  );
}
