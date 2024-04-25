import { ImageBackground, TouchableOpacity } from "react-native";
import default_styles from '@styles/styles';


interface ButtonProps {
    action: () => void;
  }

export const NextButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('@images/button/NextButton.png')} resizeMode="contain">
            <TouchableOpacity style={default_styles.btn_next} onPress={action}/>
        </ImageBackground>
    );
  };

  export const BackButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('@images/button/BackButton.png')} resizeMode="contain">
            <TouchableOpacity style={default_styles.btn_next} onPress={action}/>
        </ImageBackground>
    );
  };

  export const NextExerciseButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('@images/button/NextExerciseButton.png')} resizeMode="contain">
            <TouchableOpacity style={default_styles.btn_next} onPress={action}/>
        </ImageBackground>
    );
  };

  export const ContinueExerciseButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('@images/button/ContinueExerciseButton.png')} resizeMode="contain">
            <TouchableOpacity style={default_styles.btn_next} onPress={action}/>
        </ImageBackground>
    );
  };

  export const ToMainScreenButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('@images/button/ToMainScreenButton.png')} resizeMode="contain">
            <TouchableOpacity style={default_styles.btn_next} onPress={action}/>
        </ImageBackground>
    );
  };

  export const NextDarkButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('@images/button/NextButtonDark.png')} resizeMode="contain">
            <TouchableOpacity style={default_styles.btn_next} onPress={action}/>
        </ImageBackground>
    );
  };

  export const StartButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('@images/button/StartButton.png')} resizeMode="contain">
            <TouchableOpacity style={default_styles.btn_next} onPress={action}/>
        </ImageBackground>
    );
  };

  export const StartExercisesButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('@images/button/StartExercisesButton.png')} resizeMode="contain">
            <TouchableOpacity style={default_styles.btn_next} onPress={action}/>
        </ImageBackground>
    );
  };

  export const StepBackButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('@images/button/StepBackButton.png')} resizeMode="contain">
            <TouchableOpacity style={default_styles.btn_next} onPress={action}/>
        </ImageBackground>
    );
  };

  export const UnderstandButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('@images/button/UnderstandButton.png')} resizeMode="contain">
            <TouchableOpacity style={default_styles.btn_next} onPress={action}/>
        </ImageBackground>
    );
  };

  export const HelpButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('@images/button/HelpButton.png')} resizeMode="contain">
            <TouchableOpacity style={default_styles.btn_next} onPress={action}/>
        </ImageBackground>
    );
  };