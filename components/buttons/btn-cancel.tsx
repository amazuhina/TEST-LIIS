import React from 'react'
import styled from 'styled-components'
import {Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from "react-redux";
import {isDarkSelector} from "../../slices/theme-slice";
import {ScreenNames} from "../../navigate";
import {useNavigation} from "@react-navigation/native";


const BtnCancelStl = styled(View)``

const TextStl = styled(Text)<{isDarkTheme: boolean}>`
  font-size: 18px;
  ${({isDarkTheme}) => isDarkTheme ? `color: #B2D2FF` : `color: #006CFF`}
`

interface BtnCancelProps {
    onHandle: () => void
}

export const BtnCancel: React.FunctionComponent<BtnCancelProps> = () => {

    const navigation = useNavigation()

    const isDarkTheme = useSelector(isDarkSelector)

    return (
        <TouchableOpacity
            // @ts-ignore
            onPress={() => navigation.navigate(ScreenNames.MainScreen)}
        >
            <BtnCancelStl>
                <TextStl isDarkTheme={isDarkTheme}>Cancel</TextStl>
            </BtnCancelStl>
        </TouchableOpacity>
    )
}