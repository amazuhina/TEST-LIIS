import React from 'react'
import styled from 'styled-components'
import {TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {ScreenNames} from "../../navigate";
import {ImageStl} from "../../feature/task-list/task-item/mark/mark";
import {useSelector} from "react-redux";
import {isDarkSelector} from "../../slices/theme-slice";


const BtnAddStl = styled(View)<{isDarkTheme: boolean}>`
  width: 64px;
  height: 64px;
  margin: 10px;
  border-radius: 32px;
  display: flex;
  justify-content: center;
  align-items: center;    
  box-shadow: 0px 16px 16px black;
  ${({isDarkTheme}) => isDarkTheme ? `background-color: #333` : `background-color: #fff`}
`



interface BtnAddProps {}

export const BtnAdd: React.FunctionComponent<BtnAddProps> = ({}) => {

    const navigation = useNavigation()

    const isDarkTheme = useSelector(isDarkSelector)

    return (
        <TouchableOpacity
            // @ts-ignore
            onPress={() => navigation.navigate(ScreenNames.TaskScreen)}
        >
            <BtnAddStl
                isDarkTheme={isDarkTheme}
                style={{
                    shadowColor: "rgba(0, 0, 0, 0.33)",
                    shadowOffset: {
                        width: 0,
                        height: 8,
                    },
                    shadowOpacity: 16,
                    shadowRadius: 4,
                    elevation: 8,
                }}
            >
                {
                    isDarkTheme ?
                        <ImageStl source={require('../../attachments/dark-theme/plus-dark.png')}/>
                                :
                        <ImageStl source={require('../../attachments/light-theme/plus.png')}/>
                }

            </BtnAddStl>
        </TouchableOpacity>
    )
}