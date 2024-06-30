import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Image, View, StyleSheet, Text, ScrollView, TouchableOpacity, ImageSourcePropType} from 'react-native';
import ExerciseStepActive from '@components/exerciseStepActive';
import { disp_height, disp_width } from '@scripts/utils/Const';
import { Exercise } from '@scripts/models/Exercise';
import Slick from 'react-native-slick';
import ExerciseStep from '@components/exerciseStep';

interface Prop {
  exercise: Exercise;
}

interface CustomButtonProps {
  source: ImageSourcePropType;
  onPress: () => void;
}

const leftArrowImage = require('../assets/images/button/arrow_left.png');
const rightArrowImage = require('../assets/images/button/arrow_right.png');

const CustomButton: FC<CustomButtonProps> = ({ source, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.arrow}>
    <Image source={source} style={{ width: disp_width * 0.07, height: disp_height * 0.035, resizeMode: "contain"}} />
  </TouchableOpacity>
);

function getMaxHeight(): number {
  let height_percent = disp_height / 2400;
  return height_percent * disp_height;
}
function ExerciseComponent(prop: Prop){
  var exercise = prop.exercise;
  const slickRef = useRef<Slick>(null);
  const scrollViewRef = useRef<ScrollView>(null);
  const [totalSlides, setTotalSlides] = useState(0);
  const [currentInstructionIndex, setCurrentInstructionIndex] = useState(0)

  useEffect(() => {
    scrollViewRef.current?.scrollTo({x: 0, y: 0, animated: true});
    slickRef.current?.scrollTo(0)
    setTotalSlides(exercise.instruction.length)
  }, [exercise]);

  const goNext = useCallback(() => {
    if (slickRef.current && slickRef.current.state.index < totalSlides - 1) {
      slickRef.current?.scrollTo(slickRef.current.state.index + 1);
    }
  }, [slickRef, totalSlides]);

  const goPrev = useCallback(() => {
    if (slickRef.current && slickRef.current.state.index > 0) {
      slickRef.current?.scrollTo(slickRef.current.state.index - 1);
    }
  }, [slickRef, totalSlides]);

  const handleIndexChanged = (index: number) => {
    setCurrentInstructionIndex(index);
  };

  return (
    <View style={styles.body}>
      <View style={styles.content}>
        <Text style={styles.instructions}>{exercise.description}</Text>
        <View style={{height: exercise.images.length === 1? disp_height * 0.37 : disp_height * 0.42, marginTop: 16}}>
          <Slick
            ref={slickRef}
            loop={false}
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.activeDot} />}
            showsButtons={false}
            onIndexChanged={handleIndexChanged}
            height={exercise.images.length === 1? disp_height * 0.3 : disp_height * 0.42}
            >
            {exercise.images?.map((val, ind) => (
              <Image key={ind} 
              style={{height: disp_height * 0.35, width: disp_width - 32}} 
              source={typeof val === 'string' ? { uri: val } : val} />
            ))}
          </Slick>
        </View>
        {exercise.images.length !== 1 ? 
          <View style={styles.buttonContainer}>
            <CustomButton source={leftArrowImage} onPress={goPrev} />
            <CustomButton source={rightArrowImage} onPress={goNext} />
          </View> : <></>
        }
        <ScrollView style={{maxHeight: getMaxHeight()}}
          ref={scrollViewRef}>
          {exercise.instruction?.map((step: string, stepNumb: number) => (
            currentInstructionIndex === stepNumb 
              ? <ExerciseStepActive key={stepNumb} stepNumb={stepNumb + 1} step={step} />
              : 
              <TouchableOpacity onPress={ () => {
                  setCurrentInstructionIndex(stepNumb)
                  slickRef.current?.scrollTo(stepNumb)
                }}>
                <ExerciseStep key={stepNumb} stepNumb={stepNumb + 1} step={step} />
              </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1
  },
  content: {
    margin: 16
  },
  image: {
    aspectRatio: 1.5,
    width: disp_width - 32,
    marginTop: 20,
    marginBottom: 20
  },
  text: {
    fontSize: 19,
    flex: 1
  },
  instructions: {
    color: '#CFCFCF',
    fontSize: 18,
    fontFamily: 'Roboto Mono',
    fontWeight: '300',
  },
  dot: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  arrow: {
    padding: 0,
  },
  buttonContainer: {
    marginTop: -disp_height * 0.055,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16, // Add margin to space out elements
  },
});

export default ExerciseComponent;