import { ImageBackground, TouchableOpacity } from "react-native";
import default_styles from '../Screens/styles/styles';


interface ButtonProps {
    action: () => void;
  }

export const NextButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('./Images/NextButton.svg')}>
            <TouchableOpacity style={default_styles.btn_next} onPress={action}/>
        </ImageBackground>
    );
  };

  export const BackButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('./Images/BackButton.svg')}>
            <TouchableOpacity style={default_styles.btn_next} onPress={action}/>
        </ImageBackground>
    );
  };

  export const NextExerciseButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('./Images/NextExerciseButton.svg')}>
            <TouchableOpacity style={default_styles.btn_next} onPress={action}/>
        </ImageBackground>
    );
  };

  export const ContinueExerciseButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('./Images/ContinueExerciseButton.svg')}>
            <TouchableOpacity style={default_styles.btn_next} onPress={action}/>
        </ImageBackground>
    );
  };

  export const MainScreenButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('./Images/MainScreenButton.svg')}>
            <TouchableOpacity style={default_styles.btn_next} onPress={action}/>
        </ImageBackground>
    );
  };

  export const NextDarkButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('./Images/NextDarkButton.svg')}>
            <TouchableOpacity style={default_styles.btn_next} onPress={action}/>
        </ImageBackground>
    );
  };

  export const StartButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('./Images/StartButton.svg')}>
            <TouchableOpacity style={default_styles.btn_next} onPress={action}/>
        </ImageBackground>
    );
  };

  export const StartExercisesButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('./Images/StartExercisesButton.svg')}>
            <TouchableOpacity style={default_styles.btn_next} onPress={action}/>
        </ImageBackground>
    );
  };

  export const StepBackButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('./Images/StepBackButton.svg')}>
            <TouchableOpacity style={default_styles.btn_next} onPress={action}/>
        </ImageBackground>
    );
  };

  export const UnderstandButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('./Images/UnderstandButton.svg')}>
            <TouchableOpacity style={default_styles.btn_next} onPress={action}/>
        </ImageBackground>
    );
  };

  export const HelpButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('./Images/HelpButton.svg')}>
            <TouchableOpacity style={default_styles.btn_next} onPress={action}/>
        </ImageBackground>
    );
  };