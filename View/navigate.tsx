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
                options={{title: 'Выбор патологии',  headerShown: false}}
                />
            <Stack.Screen
                name="choosingBodyPart"
                component={choosingBodyPart}
                options={{title: 'Выбор части тела',  headerShown: false}}
                />
            <Stack.Screen 
                name="doExercise"
                component={doExercise}
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="mainScreen"
                component={mainScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export function ClearStackAndNavigate({ navigation, path } : { navigation : any , path: string}) { 
     navigation.dispatch(CommonActions.reset({
         index: 0,
         routes: [{name: path}]
    }))
    console.log(1);
    //navigation.push(path)
    return () => navigation.popToTop()
}