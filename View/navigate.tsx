import React from "react";
import choosePat from "./choosePat";
import choosingBodyPart from "./choosingBodyPart";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, CommonActions } from "@react-navigation/native";
import { Exercise } from "../Model/Exercise";
import doExercise from "./doExercise";
import initialScreen from "./mainScreen";
import mainScreen from "./mainScreen";

const Stack = createStackNavigator();

export default function Navigate(initialScreen: string){
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={initialScreen}>
            <Stack.Screen
                name="choosePat"
                component={choosePat}
                options={{title: 'Выбор патологии'}}
                />
            <Stack.Screen
                name="choosingBodyPart"
                component={choosingBodyPart}
                options={{title: 'Выбор части тела'}}
                />
            <Stack.Screen 
                name="doExercise"
                component={doExercise}
                options={{}}
            />
            <Stack.Screen 
                name="mainScreen"
                component={mainScreen}
                options={{}}
            />
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export function ClearStackAndNavigate({ navigation, path } : { navigation : any , path: string}) { 
    // navigation.reset({
    //     index: 0,
    //     routes: [{name: path}]
    // })
    navigation.push(path)
    return () => navigation.popToTop()
}