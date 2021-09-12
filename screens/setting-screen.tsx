import React from 'react'
import styled from 'styled-components'
import {View, Text} from 'react-native';
import { BtnToggle } from '../components/buttons/btn-toggle';
import {useSelector} from "react-redux";
import { Header } from '../components/header/header';
import { BtnHome } from '../components/buttons/btn-home';
import { isDarkSelector } from '../slices/theme-slice';



const SettingScreenStl = styled(View)<{isDarkTheme: boolean}>` 
  flex: 1;
  ${({isDarkTheme}) => isDarkTheme ? `background-color: #333` : `background-color: #fff` }
`

const SettingItemStl = styled(View)`    
  flex-direction: column;

  border-bottom-width: 1px;
  border-bottom-color:  #dadada;
  padding: 15px 0;
  
`

const ViewStl = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const TextStl = styled(Text)<{isDarkTheme: boolean}>`
  font-size: 18px;
  ${({isDarkTheme}) => !isDarkTheme ? `color: #333` : `color: #fff`}
`



export const SettingScreen: React.FunctionComponent = () => {

    const isDarkTheme = useSelector(isDarkSelector)


    return (
        <SettingScreenStl
            isDarkTheme={isDarkTheme}
        >
            <SettingItemStl>
                <Header title={'Setting'} RightBtn={<BtnHome/>} LeftBtn={null}/>
                <ViewStl>
                    <TextStl
                        isDarkTheme={isDarkTheme}
                    >
                        Theme
                    </TextStl>
                    <BtnToggle/>
                </ViewStl>
            </SettingItemStl>
        </SettingScreenStl>
    )
}