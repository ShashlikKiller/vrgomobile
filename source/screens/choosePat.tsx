import { NextButton, NextButtonLightWide } from '@components/buttonsComponent';
import DropdownComponent from '@components/patologyDropdownComponent';
import { NavigationContext } from '@navigations/navigate';
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const sideMargin = 16;


export default function ChoosePat({ navigation }: { navigation: any }) {
  const [selectedPathology, setSelectedPathology] = useState<string>('');

  const { data, setData } = useContext(NavigationContext);
  
  let dataProvider = data.dataProvider;
  
  const loadScene = () => {
    navigation.navigate('ChoosingBodyPart', { selectedPathology });
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.guideText}>
          Начните вводить патологию или нарушение необходимое к физиотерапии
        </Text>
        <DropdownComponent onSelect={setSelectedPathology} dataProvider={dataProvider}/>
        {selectedPathology == '' ? <></> : <NextButtonLightWide action={loadScene}/>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: '#232323',
    alignItems: 'center',
    padding: sideMargin
  },
  scrollbar: {
    backgroundColor: '#FFFFFF',
    width: 9,
    borderColor: '#343434',
    borderWidth: 2,
    height: '100%'
  },
  container: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
    height: '100%',
    padding: sideMargin
  },
  guideText: {
    fontFamily: 'Inter',
    fontWeight: '300',
    fontSize: 23,
    color: '#FFFFFF',
    marginTop: 10,
    marginBottom: 10,
    flexWrap: 'wrap',
    width: '100%'
  }
});