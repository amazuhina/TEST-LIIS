import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components'
import {Provider, useSelector} from "react-redux";
import {store} from "./redux/store";
import { NavigationContainer } from '@react-navigation/native';
import {Navigate} from "./navigate";
import {isDarkSelector} from "./slices/theme-slice";


const AppStl = styled(View)<{isDarkTheme: boolean}>`
  flex: 1;  
  padding: 20px;
  margin-top: 50px;
  justify-content: space-between; 
  color: #333;
  
  
  ${({isDarkTheme}) => isDarkTheme && `
      background-color: #333;  
      color: #fff;
  `}
`

const AppContent = () => {

    const isDarkTheme = useSelector(isDarkSelector)


    return (
        <AppStl isDarkTheme={isDarkTheme}>
            <NavigationContainer>
                <Navigate/>
            </NavigationContainer>
        </AppStl>
    )
}

const App = () => {
    return (
        <Provider store={store}>
            <AppContent />
        </Provider>
    )
}


export default App