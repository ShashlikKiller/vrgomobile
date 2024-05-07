import React from "react";
import choosingBodyPart from "@screens/choosingBodyPart";

import choosePat from "@screens/choosePat";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, CommonActions } from "@react-navigation/native";
import doExercise from "@screens/session";
import mainScreen from "@screens/main";
import { StatusBar } from "expo-status-bar";

const Stack = createStackNavigator();

export default function Navigate(initialScreen: string){
    return (
        <>
        <StatusBar style="light" backgroundColor="black"/>
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
    </>
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