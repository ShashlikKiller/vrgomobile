import React, { useEffect, useState } from 'react';
import {PatologyElement, NoPatologyElement, SelectedPatology} from '@components/patologyElement';
import { View, TextInput, ScrollView, StyleSheet, Dimensions, } from 'react-native';
import { IDataProvider } from '@scripts/interfaces/content-provider/IDataProvider';
import { DataProvider } from '@scripts/utils/DataProvider';

const { width: disp_width } = Dimensions.get('window');
const sideMargin = 16;

const dataFromJson = [ // Здесь мы берем откуда-то массив патологий
  { label: 'Инсульт', value: '1' },
  { label: 'Инфаркт', value: '2' },
  { label: 'Инклюзия', value: '3' },
  { label: 'Красный нос', value: '4' },
  { label: 'Простуда', value: '5' },
  { label: 'Кашель', value: '6' },
  { label: 'Мозг рака', value: '7' },
  { label: 'Инсульт2', value: '8' }];

  const NoPatology = {label: 'Нет моей патологии', value: '0'};

  const data = [...dataFromJson, NoPatology];

interface Item {
    value: string;
    label: string;
}

interface DropdownProps {
    onSelect: (value: string) => void;
    dataProvider: IDataProvider;
    //data: Item[];
}

export const DropdownComponent = ({ onSelect, dataProvider}: DropdownProps) => {
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState(data);
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);
    const [isFocused, setIsFocused] = useState(false); // Фокус ввода текста
    useEffect(()=>{
      dataProvider.Get<Item>('patology').then(result=> {
          setSelectedItem(result);
      })
    }, []);
    const filterData = (text: string) => {
      const filtered = data.filter(item =>
        item.label.toLowerCase().includes(text.toLowerCase())
      );
      const noPathologyItem = data.find(item => item.label === 'Нет моей патологии');
      if (noPathologyItem && !filtered.includes(noPathologyItem)) {
        filtered.push(noPathologyItem);
      }
      setFilteredData(filtered);
      setSearchText(text);
    };
  
    const handleSelect = (value: string, label: string) => {
      const selectedItem = data.find(item => item.value === value);
      if (selectedItem) {
        onSelect(value);
        // Обнуление фильтров и поиска после выбора элемента.
        // Можно сохранить фильтр, вместо '' = label и закомментить setFilteredData.
        setSearchText('');
        setFilteredData(data); 
        //
        setSelectedItem(selectedItem);
        console.debug(selectedItem);
        dataProvider.Set(selectedItem, "patology")
        setIsFocused(false);
      }
    };
  
    return (
      <View style={styles.container}>
        {isFocused ? (
          <TextInput
            style={styles.inputText}
            placeholder="Начните вводить"
            placeholderTextColor="#888888"
            onChangeText={filterData}
            value={searchText}
            // onBlur={() => {setIsFocused(false)}} // Обработчик события потери фокуса
          />
        ) : (
          <SelectedPatology text={selectedItem ? selectedItem.label : 'Начните вводить свою патологию.'} 
          onPress={() => setIsFocused(true)} /> // Обработчик события нажатия
        )}
        {isFocused && (
        <ScrollView>
          {filteredData.map(item => {
            if (item.label === 'Нет моей патологии') {
              return (
                <NoPatologyElement
                  key={item.value}
                  text={item.label}
                  onPress={() => handleSelect(item.value, item.label)}
                />
              );
            } else {
              return (
                <PatologyElement
                  key={item.value}
                  text={item.label}
                  onPress={() => handleSelect(item.value, item.label)}
                />
              );
            }
          })}
        </ScrollView>
        )}
      </View>
    );
  };

  export default DropdownComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: disp_width - sideMargin*2, 
        backgroundColor: '#232323'
    },
    inputText: {
        margin: 4,
        borderWidth: 2,
        padding: 10,
        fontSize: 19,
        color: '#FFFFFF',
        borderColor: '#526160',
        backgroundColor: '#393939',
      }
})