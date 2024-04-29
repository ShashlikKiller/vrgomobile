import React, { createContext, useState } from "react";
import choosingBodyPart from "@screens/choosingBodyPart";

import choosePat from "@screens/choosePat";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, CommonActions } from "@react-navigation/native";
import doExercise from "@screens/session";
import mainScreen from "@screens/main";
import start from "@screens/start";
import { DataProvider } from "@scripts/utils/DataProvider";

// Создаем контекст
export const NavigationContext = createContext<any>(null);

const Stack = createStackNavigator();

export default function Navigate(initialScreen: string){

    const [data, setData] = useState({ dataProvider: DataProvider.GetInstance() });
    
    return (
    <NavigationContainer>
        <NavigationContext.Provider value={{data, setData}}>
        <Stack.Navigator initialRouteName={initialScreen}>
            <Stack.Screen
                    name="start"
                    component={start}
                    options={{title: 'Выбор патологии',  headerShown: false}}
                    />
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
        </NavigationContext.Provider>
    </NavigationContainer>
    )
}

export function ClearStackAndNavigate(navigation : any , path: string) { 
     navigation.dispatch(CommonActions.reset({
         index: 0,
         routes: [{name: path}]
    }))
    console.log(1);
    //navigation.push(path)
    return () => navigation.popToTop()
}