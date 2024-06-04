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
          Font_Book: require('@assets/fonts/Pier-Book.otf'),
          Font_Medium: require('@assets/fonts/Pier-Medium.ttf'),
          Font_Bold: require('@assets/fonts/Pier-Bold.ttf'),
          Font_Regular: require('@assets/fonts/Pier-Regular.ttf'),
          Rox_Book: require('@assets/fonts/Rox-Book.otf'),
          Rox_Medium: require('@assets/fonts/Rox-Medium.ttf'),
          Rox_Bold: require('@assets/fonts/Rox-Bold.ttf'),
          Rox_Regular: require('@assets/fonts/Rox-Regular.ttf'),
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
