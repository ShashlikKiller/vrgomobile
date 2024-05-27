import { useState } from 'react';
import Navigate, { Screens } from './source/navigations/navigate';
import * as Font from 'expo-font';


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Inter': require('@fonts/Inter-Regular.ttf'),
      'Inter-Bold': require('@fonts/Inter-Bold.ttf'),
      'RobotoMono': require('@fonts/RobotoMono-Regular.ttf'),
      'RobotoMono-Bold': require('@fonts/RobotoMono-Bold.ttf'),
    });
    setFontsLoaded(true);
  };

  if (!fontsLoaded) {
    loadFonts();
    return Navigate(Screens.Start);
  }

  return Navigate(Screens.Start);
}
