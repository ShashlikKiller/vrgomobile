import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Platform, View, StyleSheet } from 'react-native';
import { Exercise } from '../../Model/Exercise';




export default function ExerciseScreen(_exercise: Exercise) {
  return (
    <View>
    <div>
      <button>Назад</button>
      <div style={{ position: 'absolute', top: 0, right: 0 }}>
            <div>{2} из {3}</div>
            <div style={{ marginTop: '0.5em' }}>Упражнений</div>
      </div>
      { <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
        <div>{_exercise.description}</div>
        <Image source={require(_exercise.images.toString())} alt="Изображение с инструкцией" />
        <div>
        <ul>
        {_exercise.instruction.map((instruction: String, index: any) => (
          <li key={index}>{instruction.toString()}</li>
        ))}
      </ul>
        </div>
      </div> }
      <div style={{ position: 'absolute', bottom: 0, left: 0 }}>00:00</div>
      <button style={{ position: 'absolute', bottom: 0, right: 0 }}>Далее</button>
    </div>
    <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
};