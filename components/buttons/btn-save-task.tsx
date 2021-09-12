import React from 'react'
import styled from 'styled-components'
import {Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from "react-redux";
import {isDarkSelector} from "../../slices/theme-slice";


const BtnSaveTaskStl = styled(View)`
`

const TextStl = styled(Text)<{isDarkTheme: boolean}>`  
  font-size: 18px;
  ${({isDarkTheme}) => isDarkTheme ? `color: #B2D2FF` : `color: #006CFF`}
`

interface BtnSaveTaskProps {
    onHandle: () => void
}

export const BtnSaveTask: React.FunctionComponent<BtnSaveTaskProps> = ({onHandle}) => {

    const isDarkTheme = useSelector(isDarkSelector)

    return (
        <TouchableOpacity
            onPress={onHandle}
        >
            <BtnSaveTaskStl>
                <TextStl isDarkTheme={isDarkTheme}>Done</TextStl>
            </BtnSaveTaskStl>
        </TouchableOpacity>
    )
}