import React from 'react'
import styled from 'styled-components'
import {Text, View} from 'react-native';
import {useSelector} from "react-redux";
import {isDarkSelector} from "../../slices/theme-slice";



const HeaderStl = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin-bottom: 24px;  
`


const TitleStl = styled(Text)<{isDarkTheme: boolean}>`
  font-size: 32px;
  ${({isDarkTheme}) => !isDarkTheme ? `color: #333` : `color: #fff`}
`


interface HeaderProps {
    title: string
    RightBtn: any
    LeftBtn: any | null
}

export const Header: React.FunctionComponent<HeaderProps> = ({title, RightBtn, LeftBtn}) => {

    const isDarkTheme = useSelector(isDarkSelector)

    return (
        <HeaderStl>
            {LeftBtn}
            <TitleStl isDarkTheme={isDarkTheme}
            >
                {title}
            </TitleStl>
            {RightBtn}
        </HeaderStl>
    )
}