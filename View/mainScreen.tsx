import { Button, View, Text } from "react-native";

export default function mainScreen({navigation}: {navigation: any}) {
    const loadExerciseScene = () => {
      navigation.navigate('doExercise')
    }
    const loadPatScene = () => {
      navigation.navigate('choosePat', {backScene: 'mainScreen'})
    }
    const loadBodyPartScene = () => {
      navigation.navigate('choosingBodyPart', {backScene: 'mainScreen'})
    }

    return (
      <View>
        <Text>Ваша паталогия верна?</Text>
        <Button
          title="Изменить"
          onPress={loadPatScene}
          color={'#B6FF1B'}
        />
        <Text>Верно ли выбраны поражённые части тела?</Text>
        <Button
          title="Изменить"
          onPress={loadBodyPartScene}
          color={'#B65FFB'}
        />
        <Button
          title="К упражнениям"
          onPress={loadExerciseScene}
          color={'#B6FFFB'}
        />
      </View>
    );
}

