import { ImageBackground, TouchableOpacity } from "react-native";
import default_styles from '@styles/styles';


interface ButtonProps {
    action: () => void;
  }

export const NextButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('@images/button/NextButton.svg')}>
            <TouchableOpacity style={default_styles.btn_next} onPress={action}/>
        </ImageBackground>
    );
  };

  export const BackButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('@images/button/BackButton.svg')}>
            <TouchableOpacity style={default_styles.btn_next} onPress={action}/>
        </ImageBackground>
    );
  };

  export const NextExerciseButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('@images/button/NextExerciseButton.svg')}>
            <TouchableOpacity style={default_styles.btn_next} onPress={action}/>
        </ImageBackground>
    );
  };

  export const ContinueExerciseButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('@images/button/ContinueExerciseButton.svg')}>
            <TouchableOpacity style={default_styles.btn_next} onPress={action}/>
        </ImageBackground>
    );
  };

  export const MainScreenButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('@images/button/MainScreenButton.svg')}>
            <TouchableOpacity style={default_styles.btn_next} onPress={action}/>
        </ImageBackground>
    );
  };

  export const NextDarkButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('@images/button/NextDarkButton.svg')}>
            <TouchableOpacity style={default_styles.btn_next} onPress={action}/>
        </ImageBackground>
    );
  };

  export const StartButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('@images/button/StartButton.svg')}>
            <TouchableOpacity style={default_styles.btn_next} onPress={action}/>
        </ImageBackground>
    );
  };

  export const StartExercisesButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('@images/button/StartExercisesButton.svg')}>
            <TouchableOpacity style={default_styles.btn_next} onPress={action}/>
        </ImageBackground>
    );
  };

  export const StepBackButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('@images/button/StepBackButton.svg')}>
            <TouchableOpacity style={default_styles.btn_next} onPress={action}/>
        </ImageBackground>
    );
  };

  export const UnderstandButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('@images/button/UnderstandButton.svg')}>
            <TouchableOpacity style={default_styles.btn_next} onPress={action}/>
        </ImageBackground>
    );
  };

  export const HelpButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('@images/button/HelpButton.svg')}>
            <TouchableOpacity style={default_styles.btn_next} onPress={action}/>
        </ImageBackground>
    );
  };