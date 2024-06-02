import { ImageBackground, Text, TouchableOpacity } from "react-native";
import default_styles from '@styles/styles';
import { disp_width } from "@scripts/utils/Const";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";


interface ButtonProps {
    action: () => void;
  }

interface ExtendedButtonProps {
    action: any; // Тут был void.
                 // Я изменил для того, чтобы можно было
                 // Выводить верстку по нажатию
    title: string;
    enabled: Boolean;
  }

export const NextButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('@images/button/NextButton.png')} resizeMode="contain" style={{ marginLeft: 0, marginRight: 0}}>
            <TouchableOpacity style={default_styles.btn_2of3_wide} onPress={action}/>
        </ImageBackground>
    );
  };

  export const BackButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('@images/button/BackButton.png')} resizeMode="contain" style={{marginLeft: 2, marginRight: 0}}>
          <TouchableOpacity onPress={action} style={default_styles.btn_1of3_wide} /> 
        </ImageBackground>
    );
  };

  export const BackButtonLittle: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('@images/button/BackButtonLittle.png')} resizeMode="contain" style={{alignSelf: 'flex-start', marginLeft:15, marginRight: 0, marginTop: 40}}>
            <TouchableOpacity onPress={action} style={default_styles.btn_1of6_wide}/> 
        </ImageBackground>
    );
  };

  export const NextExerciseButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('@images/button/NextExerciseButton.png')} resizeMode="contain">
            <TouchableOpacity style={default_styles.btn_3of3_wide} onPress={action}/>
        </ImageBackground>
    );
  };

  export const ContinueExerciseButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('@images/button/ContinueExerciseButton.png')} resizeMode="contain">
            <TouchableOpacity style={default_styles.btn_3of3_wide} onPress={action}/>
        </ImageBackground>
    );
  };

  export const ToMainScreenButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('@images/button/ToMainScreenButton.png')} resizeMode="contain">
            <TouchableOpacity style={default_styles.btn_3of3_wide} onPress={action}/>
        </ImageBackground>
    );
  };

  // export const NextButtonDark: React.FC<ExtendedButtonProps> = ({action, title, enabled}) => {
  //   if(enabled) {
  //     return (
  //       <ImageBackground source={require('@images/button/NextButtonDark.png')} resizeMode="contain" style={{marginLeft: 0, marginRight: 0}}>
  //           <TouchableOpacity style={default_styles.btn_2of3_wide} onPress={action}/>
  //       </ImageBackground>
  //   );
  //   }
  // };

  //  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  export const StartButtonEmpty: React.FC<ExtendedButtonProps> = ({action, title, enabled}) => {

    return (
        <ImageBackground source={require('@images/button/StartButtonEmpty.png')} resizeMode="contain">
          <TouchableOpacity style={default_styles.btn_1of2_wide} onPress={action}> 
            <Text style={{fontSize:22, paddingLeft: 50 }}>{title}</Text> 
          </TouchableOpacity>
        </ImageBackground>
    );
  };

  export const StartExercisesButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('@images/button/StartExercisesButton.png')} resizeMode="contain" style={{marginLeft: 20, marginRight: 20}}>
            <TouchableOpacity style={default_styles.btn_3of3_wide_in_main_menu} onPress={action}/>
        </ImageBackground>
    );
  };

  export const StepBackButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('@images/button/StepBackButton.png')} resizeMode="contain">
            <TouchableOpacity style={default_styles.btn_3of3_wide} onPress={action}/>
        </ImageBackground>
    );
  };

  export const UnderstandButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('@images/button/UnderstandButton.png')} resizeMode="contain" style={{margin:20}}>
            <TouchableOpacity style={default_styles.btn_3of3_wide_in_modal_win} onPress={action}/>
        </ImageBackground>
    );
  };

  export const HelpButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('@images/button/HelpButton.png')} resizeMode="contain" style={default_styles.btn_3of3_wide} >
          {/* style={{width: disp_width, marginTop:200}} */}
          {/* resizeMode="contain" */}
           {/* style={{marginTop:40}}> */}
            <TouchableOpacity style={default_styles.btn_3of3_wide} onPress={action}/>
        </ImageBackground>
    );
  };

  // export const NextButtonLight: React.FC<ExtendedButtonProps> = ({action, title, disabled}) => {
  //   if(!disabled) {
  //     return (
  //         <ImageBackground source={require('@images/button/NextButtonLight.png')} resizeMode="contain">
  //             <TouchableOpacity style={default_styles.btn_1of2_wide} onPress={action}/>
  //         </ImageBackground>
  //     );
  //   } else {
  //     return 
  //   }
  // };

  export const NextButtonEnabling: React.FC<ExtendedButtonProps> = ({action, title, enabled}) => {
    if(enabled) {
      return (
        <ImageBackground source={require('@images/button/NextButtonLight.png')} resizeMode="contain">
            <TouchableOpacity style={default_styles.btn_1of2_wide} onPress={action}/>
        </ImageBackground>
    );
    } else {
      return (
        <ImageBackground source={require('@images/button/NextButtonDark.png')} resizeMode="contain" >
            <TouchableOpacity style={default_styles.btn_1of2_wide} onPress={action} disabled={true}/>
        </ImageBackground>
    );
    }
  };

  export const NextButtonLightWide: React.FC<ButtonProps> = ({action}) => {
    return (
      <ImageBackground source={require('@images/button/NextButtonLightWide.png')} resizeMode="contain">
        <TouchableOpacity style={default_styles.btn_2of3_wide} onPress={action}/>
      </ImageBackground>
    )
  };

  export const StartButton: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('@images/button/StartButton.png')} resizeMode="contain">
            <TouchableOpacity style={default_styles.btn_1of2_wide} onPress={action}/>
        </ImageBackground>
    );
  };

  export const StartButtonInactive: React.FC<ButtonProps> = ({action}) => {
    return (
        <ImageBackground source={require('@images/button/StartButtonInactive.png')} resizeMode="contain">
            <TouchableOpacity style={default_styles.btn_1of2_wide} onPress={action}/>
        </ImageBackground>
    );
  };

  export const RunningExerciseButton: React.FC<ExtendedButtonProps> = ({action, title, enabled}) => {
    return (
        <ImageBackground source={require('@images/button/RunningExerciseButton.png')} resizeMode="contain">
            <TouchableOpacity style={default_styles.btn_3of3_wide} onPress={action}>
              <Text style={{fontSize:22, paddingLeft: 10 }}>{title}</Text> 
            </TouchableOpacity>
        </ImageBackground>
    );
  };
  