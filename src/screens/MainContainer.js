import React from "react";
import {View,Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MyCart from '../screens/MyCart'
import Home from './Home'
import Login from '../screens/Login';
import OrderPlaced from "../screens/OrderPlaced";
const MainContainer=()=>{
  const Stack = createNativeStackNavigator();
  return(
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="MyCart" component={MyCart}/>
      <Stack.Screen name="OrderPlaced" component={OrderPlaced}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}
export default MainContainer