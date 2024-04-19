import * as React from 'react';
import { useState } from 'react';
import { Button, View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

import { Dropdown } from 'react-native-element-dropdown';
import default_styles from './Screens/styles/styles';
import { NextButton, StepBackButton } from './Buttons/buttonsComponent';

const data = [
    { label: 'Инсульт', value: '1' },
    { label: 'Инфаркт', value: '2' },
    { label: 'Инклюзия', value: '3' },
    { label: 'Красный нос', value: '4' },
    { label: 'Простуда', value: '5' },
    { label: 'Кашель', value: '6' },
    { label: 'Мозг рака', value: '7' },
    { label: 'Нет моей болезни', value: '8' },
  ];

  const DropdownComponent = () => {
    const [value, setValue] = useState<string>('');

    return (
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Выберите патологию"
        searchPlaceholder="Поиск"
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        
      />
    );
  };

export default function choosePat({navigation, route}: {navigation: any, route: any}) {
  const loadBodyPartScene = () => {
    // тут будет проверка из файла выбрана ли уже паталогия; навигируемся (да -> в главное меню)(нет -> к выбору части тела)
    navigation.navigate('choosingBodyPart', {backScene: 'choosePat'}) // пока только в часть тела
  }
  return( 
    <View style={styles.container}>
      <Text style={styles.text}>Начните вводить патологию или нарушение необходимое к физиотерапии</Text> 
      <DropdownComponent />
      <Button
        title="Далее"
        onPress={loadBodyPartScene}
        color={'#B6FFFB'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text: {
    textAlignVertical: 'bottom',
    color: 'black',
    fontSize: 19,
    fontFamily: 'Inter',
    fontWeight: '300',
  },
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    
    borderBottomWidth: 0.5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'black',
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  buttonText: {
    color: '#232323',
    fontSize: 19,
    fontFamily: 'Inter',
    fontWeight: '400',
  },
  buttonStyle:{
    backgroundColor: '#B6FFFB',
  }
});
