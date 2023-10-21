import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../Views/Home";
import Detail from "../Views/Detail";

const Stack = createNativeStackNavigator()


const Routes = ()=>{
   
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
                <Stack.Screen name="Detail" component={Detail}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
  
}

export default Routes