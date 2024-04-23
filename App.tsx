import { useState } from 'react';
import Navigate from './source/navigations/navigate';
import * as Font from 'expo-font';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      Inter: require('@fonts/Inter-Regular.ttf'),
      'Inter-Bold': require('@fonts/Inter-Bold.ttf'),
      'RobotoMono': require('@fonts/RobotoMono-Regular.ttf'),
      'RobotoMono-Bold': require('@fonts/RobotoMono-Bold.ttf'),
    });
    setFontsLoaded(true);
  };

  if (!fontsLoaded) {
    loadFonts();
    return Navigate('choosePat');
  }

  // нужно будет брать флаг из файла, выбраны ли части тела и патологии или нет 
  // например, это первый вход и ещё ничто НЕ выбрано, поэтому false
  if (true) { 
    return Navigate('choosePat')
  } else {
    return Navigate('mainScreen')
  }

}
