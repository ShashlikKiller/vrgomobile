import React from "react";
import choosePat from "./choosePat";
import choosingBodyPart from "./choosingBodyPart";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate(){
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="choosePat">
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
            
        </Stack.Navigator>
    </NavigationContainer>
    )
}