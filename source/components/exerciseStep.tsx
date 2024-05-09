import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";
  
  interface Props {
    stepNumb: number;
    step: string;
  }

const ExerciseStep: React.FC<PropsWithChildren<Props>> = ({ stepNumb, step }) => {
return (
        <View style={styles.container}>
          <View style={styles.stepNumberContainer}>
            <Text style={styles.stepNumber}>{stepNumb}</Text>
          </View>
          <Text style={styles.stepDescription}>{step}</Text>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        width: 'auto',
        height: 'auto',
        maxHeight: 100,
        flex: 1,
        marginBottom: 15,
        backgroundColor: 'rgba(182, 255, 251, 0.10)',
        borderColor: 'rgba(182, 255, 251, 0.20)',
        borderWidth: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
      },
      stepNumberContainer: {
        height: '100%',
        width:'7%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(35, 35, 35, 0.30)',
        padding: 2,
        marginRight: 8
      },
      stepNumber: {
        textAlign: 'center',
        color: '#B6FFFB',
        fontSize: 19,
        fontFamily: 'Inter',
        fontWeight: '400',
      },
      stepDescription: {
        flex: 1,
        color: 'rgba(255, 255, 255, 0.70)',
        fontSize: 18,
        flexWrap: 'wrap',
        fontFamily: 'RobotoMono',
        fontWeight: '300',
      },
    });


export default ExerciseStep;