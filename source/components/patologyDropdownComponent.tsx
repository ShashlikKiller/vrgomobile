import React, { useState } from 'react';
import {PatologyElement, NoPatologyElement, SelectedPatology} from '@components/patologyElement';
import { View, TextInput, ScrollView, StyleSheet, Dimensions, } from 'react-native';

const { width: disp_width } = Dimensions.get('window');
const sideMargin = 16;

interface Item {
    value: string;
    label: string;
}

interface DropdownProps {
    onSelect: (value: string) => void;
    data: Item[];
}

export const DropdownComponent = ({ onSelect, data }: DropdownProps) => {
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState(data);
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);
    const [isFocused, setIsFocused] = useState(false); // Фокус ввода текста
  
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
        setSearchText(label);
  
        setFilteredData([]); 
        setSelectedItem(selectedItem);
        setIsFocused(false);
      }
    };
  
    return (
      <View style={{flex: 1, width: disp_width - sideMargin*2}}>
        {isFocused ? (
          <TextInput
            style={styles.inputText}
            placeholder="Начните вводить"
            placeholderTextColor="#888888"
            onChangeText={filterData}
            value={searchText}
            //onBlur={() => setIsFocused(false)} // Обработчик события потери фокуса
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