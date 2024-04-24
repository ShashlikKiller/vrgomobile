import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

interface ElementProps {
    text: string;
    onPress: () => void;
}

export const PatologyElement = ({ text, onPress }: ElementProps) => {
  return (
    <TouchableOpacity style={stylesPat.container} onPress={onPress}>
      <Text style={stylesPat.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export const NoPatologyElement = ({ text, onPress }: ElementProps) => {
    return (
      <TouchableOpacity style={stylesNoPat.container} onPress={onPress}>
        <Text style={stylesNoPat.text}>{text}</Text>
      </TouchableOpacity>
    );
  };

export const SelectedPatology = ({ text, onPress }: ElementProps) => {
    return (
      <TouchableOpacity style={stylesSelected.container} onPress={onPress}>
        <Text style={stylesSelected.text}>{text}</Text>
        <Image style={stylesSelected.image} source={require('@images/patology/pencil.png')}></Image>
      </TouchableOpacity>
    );
};
  
const stylesSelected = StyleSheet.create({
    container: {
      backgroundColor: '#393939',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      margin: 4,
    },
    text: {
      color: '#B6FFFB',
      fontSize: 19,
      fontWeight: '300',
      fontFamily: 'Inter'
    },
    image: {
        width: 25,
        height: 25,
        padding: 10
    }
});

const stylesPat = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#404F4E',
    padding: 10,
    margin: 4,
  },
  text: {
    color: '#B6FFFB',
    fontSize: 19,
    fontWeight: '300',
    fontFamily: 'Inter'
  }
});

const stylesNoPat = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#393939',
        padding: 10,
        margin: 4,
      },
      text: {
        color: '#526160',
        fontSize: 19,
        fontWeight: '300',
        fontFamily: 'Inter'
      }
});