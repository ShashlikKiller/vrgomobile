import React, { createContext, useState } from "react";
import choosingBodyPart from "@screens/choosingBodyPart";

import choosePat from "@screens/choosePat";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, CommonActions } from "@react-navigation/native";
import doExercise from "@screens/session";
import mainScreen from "@screens/main";

import { StatusBar } from "expo-status-bar";
import start from "@screens/start";
import { DataProvider } from "@scripts/utils/DataProvider";

// Создаем контекст
export const NavigationContext = createContext<any>(null);


const Stack = createStackNavigator();

export default function Navigate(initialScreen: string){

    const [data, setData] = useState({ dataProvider: DataProvider.GetInstance() });
    
    return (
        <>
        <StatusBar style="light" backgroundColor="black"/>
    <NavigationContainer>
        <NavigationContext.Provider value={{data, setData}}>
        <Stack.Navigator initialRouteName={initialScreen}>
            <Stack.Screen
                    name={Screens.start}
                    component={start}
                    options={{title: 'Выбор патологии',  headerShown: false}}
                    />
            <Stack.Screen
                name={Screens.choosePat}
                component={choosePat}
                options={{title: 'Выбор патологии',  headerShown: false}}
                />
            <Stack.Screen
                name={Screens.choosingBodyPart}
                component={choosingBodyPart}
                options={{title: 'Выбор части тела',  headerShown: false}}
                />
            <Stack.Screen 
                name= {Screens.doExercise}
                component={doExercise}
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name={Screens.mainScreen}
                component={mainScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
        </NavigationContext.Provider>
    </NavigationContainer>
    </>
    )
}

export function ClearStackAndNavigate(navigation : any , path: string) { 
     navigation.dispatch(CommonActions.reset({
         index: 0,
         routes: [{name: path}]
    }))
    //navigation.push(path)
    return () => navigation.popToTop()
}

export enum Screens{
    start = "start",
    choosePat = "choosePat",
    choosingBodyPart = "choosingBodyPart",
    doExercise = "doExercise",
    mainScreen = "mainScreen",
}