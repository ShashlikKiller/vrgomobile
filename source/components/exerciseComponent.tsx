import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Image, View, StyleSheet, Text, ScrollView, TouchableOpacity, ImageSourcePropType, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
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

const ExerciseComponent: FC<Prop> = ({ exercise }) => {
  const slickRef = useRef<Slick>(null);
  const [totalSlides, setTotalSlides] = useState(0);
  const [currentInstructionIndex, setCurrentInstructionIndex] = useState(0)

  useEffect(() => {
    slickRef.current?.scrollTo(0);
    setTotalSlides(exercise.instruction.length);
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
    <ScrollView style={styles.body}>
      <View style={styles.content}>
        <Text style={styles.instructions}>{exercise.description}</Text>
        <View>
          <Slick
            ref={slickRef}
            loop={false}
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.activeDot} />}
            showsButtons={false}
            onIndexChanged={handleIndexChanged}
            height={exercise.images.length === 1? disp_height * 0.37 : disp_height * 0.42}
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
        <View>
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
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  content: {
    margin: 16,
    flexDirection: 'column', // Ensure vertical stacking
  },
  instructions: {
    color: '#CFCFCF',
    fontSize: 18,
    fontFamily: 'Roboto Mono',
    fontWeight: '300',
    marginBottom: 16, // Add margin to space out elements
  },
  image: {
    // width: disp_width - 32,
    // height: disp_height * 0.4,
    // height: imageHeight,
    resizeMode: 'contain',
    // marginBottom: 16, // Add margin to space out elements
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