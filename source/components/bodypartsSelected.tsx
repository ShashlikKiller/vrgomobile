import * as React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';

interface ElementProps {
    bodyparts: string[];
    onPress: () => void;
}

export const BodypartsSelected = ({ bodyparts, onPress }: ElementProps) => {
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={{flexDirection: 'column'}}>
                    {bodyparts.map((item, index) => (
                        <Text style={styles.text} key={index}>{item}</Text>
                    ))}
        </View>
        <Image style={styles.image} source={require('@images/patology/pencil.png')}/>
      </TouchableOpacity>
    );
};
  
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#393939',
      flexDirection: 'row',
      padding: 10,
      margin: 4
    },
    text: {
      color: '#B6FFFB',
      fontSize: 19,
      fontWeight: '300',
      fontFamily: 'Inter',
      flexWrap: 'wrap',
      marginLeft: 5
    },
    image: {
        width: 25,
        height: 25,
        padding: 15,
        alignSelf: 'center',
        marginLeft: 'auto'
    }
});