import React from 'react'
import styled from 'styled-components'
import {View} from 'react-native';
import {Header} from "../components/header/header";
import {TaskList} from "../feature/task-list/task-list";
import {Footer} from "../feature/footer/footer";
import {useSelector} from "react-redux";
import {isDarkSelector} from "../slices/theme-slice";
import {BtnSetting} from "../components/buttons/btn-setting";
// @ts-ignore


const MainScreenStl = styled(View)<{isDarkTheme: boolean}>`
  flex: 1;  
  ${({isDarkTheme}) => !isDarkTheme ? `background-color: #fff` : `background-color: #333`}
  
`



export const MainScreen: React.FunctionComponent = () => {

    const isDarkTheme = useSelector(isDarkSelector)

return (
    <MainScreenStl
        isDarkTheme={isDarkTheme}
    >
        <Header title={'Todober'} RightBtn={<BtnSetting/>} LeftBtn={null}/>
        <TaskList/>
        <Footer/>
    </MainScreenStl>
)
}