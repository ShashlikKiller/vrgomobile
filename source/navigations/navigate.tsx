import React, { createContext, useState } from "react";
import ChoosingBodyPart from "@screens/choosingBodyPart";

import ChoosePat from "@screens/choosePat";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, CommonActions } from "@react-navigation/native";
import SessionScreen from "@screens/session";
import MainScreen from "@screens/main";

import { StatusBar } from "expo-status-bar";
import Start from "@screens/start";
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
                    name={Screens.Start}
                    component={Start}
                    options={{title: 'Выбор патологии',  headerShown: false}}
                    />
            <Stack.Screen
                name={Screens.ChoosePat}
                component={ChoosePat}
                options={{title: 'Выбор патологии',  headerShown: false}}
                />
            <Stack.Screen
                name={Screens.ChoosingBodyPart}
                component={ChoosingBodyPart}
                options={{title: 'Выбор части тела',  headerShown: false}}
                />
            <Stack.Screen 
                name= {Screens.SessionScreen}
                component={SessionScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name={Screens.MainScreen}
                component={MainScreen}
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
    Start = "Start",
    ChoosePat = "ChoosePat",
    ChoosingBodyPart = "ChoosingBodyPart",
    SessionScreen = "SessionScreen",
    MainScreen = "MainScreen",
}