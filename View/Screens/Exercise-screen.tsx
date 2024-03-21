import React from 'react';
import { Image, TouchableOpacity, Platform, View, StyleSheet, Text, Button } from 'react-native';

interface Exercise {
  images: string;
  description: string;
  instruction: string[];
}

interface Props {
  _exercise: Exercise;
}

const ExerciseScreen: React.FC<Props> = ({ _exercise }) => {
    return (
        <View style={styles.body}>
          <View style={styles.navbar}>
            <Button title="< Назад" color="#ddd" />
            <Text style={styles.text}>1 из 5 упражнений</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.instructions}>Поставьте две бутылки на расстоянии 1,5 м,</Text>
            <Image style={styles.image} source={{uri: 'https://sun9-31.userapi.com/impg/Y-Ku1XquxYqhBCfDKIT2CnBxrbJtXWjkRn_pAQ/Oio67jyEWjk.jpg?size=2560x1920&quality=95&sign=ce8af5cd150fa7eae9679a4298840bf9&type=album'}} />
            <View>
              <Text style={styles.step}>Пройдите над бутылками гемиплегичной ногой.</Text>
              <Text style={styles.step}>Развернитесь и начните снова</Text>
            </View>
            <View style={styles.btnContainer}>
              <Button title="Старт таймера" color="#555" />
              <Button title="Далее >" color="#ddd" />
            </View>
          </View>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      body: {
        backgroundColor: '#181818',
        color: 'white',
        fontFamily: 'Arial',
        height: '100%',
        flex: 1
      },
      navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
      },
      content: {
        margin: 20,
        flexGrow: 1,
      },
      instructions: {
        marginBottom: 20,
        flex: 1,
        color: '#CFCFCF',
fontSize: 18,
fontFamily: 'Roboto Mono',
fontWeight: '300'
      },
      steps: {
        //listStyleType: 'none',
        fontSize: 40,
        flex: 1
      },
      step: {
        position: 'relative',
        fontSize: 40,
        flex: 1
      },
      btn: {
        backgroundColor: '#ddd',
        color: 'black',
        padding: 20,
        textAlign: 'center',
        textDecorationLine: 'none',
        //display: 'inline-block',
        margin: 4,
        flex: 1
        //cursor: 'pointer',
      },
      btnTimer: {
        backgroundColor: '#555',
        color: 'white',
      },
      btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      image: {
        width: '100%',
        height: '100%',
        maxHeight: 320,
        flex: 1
      },
      text: {
        fontSize: 40,
        flex: 1
      },
    });    

export default ExerciseScreen;




{/* export default function ExerciseScreen(props: { _exercise: Exercise }) {
  return (
       <View style={styles.container}>
      <View style={styles.navbar}>
          <Button title="< Назад" onPress={() => {}} />
          <Text>1 из 5 упражнений</Text>
      </View>
      <View style={styles.content}>
          <Text style={styles.instructions}>Поставьте две бутылки на расстоянии 1,5 м,</Text>
          <img src={`${props._exercise.images}`} style={{width: 200, height: 200}} alt="Изображение с инструкцией" />
          <View>
              <Text style={styles.step}>
              {props._exercise.instruction.map((instruction: String, index: any) => (
          <><div> {(index + 1).toString()} </div><li key={index}>{instruction.toString()}</li></>
        ))}
              </Text>
              <Text style={styles.step}>Развернитесь и начните снова</Text>
          </View>
          <View style={styles.btnContainer}>
              <Button title="Старт таймера" onPress={() => {}} color="#555" />
              <Button title="Далее >" onPress={() => {}} color="#ddd" />
          </View>
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
  </View>
              ); */ 
              }