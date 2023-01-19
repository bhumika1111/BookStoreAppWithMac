import React from "react";
import {View,Text} from 'react-native'
import { store } from "./src/redux/Store";
import MainContainer from "./src/screens/MainContainer";
import { Provider } from "react-redux";
const App=()=>{
  
  return(
   <Provider store={store}>
    <MainContainer/>
    </Provider>
  )
}
export default App