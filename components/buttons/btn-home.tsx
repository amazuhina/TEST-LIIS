import React from 'react'
import styled from 'styled-components'
import {TouchableOpacity, View} from 'react-native';
import {ImageStl} from "../../feature/task-list/task-item/mark/mark";
import {useNavigation} from "@react-navigation/native";
import {ScreenNames} from "../../navigate";
import {useSelector} from "react-redux";
import {isDarkSelector} from "../../slices/theme-slice";


const BtnHomeStl = styled(View)`

`



export const BtnHome: React.FunctionComponent = () => {

    const navigation = useNavigation()

    const isDarkTheme = useSelector(isDarkSelector)

    return (
        <TouchableOpacity
            // @ts-ignore
            onPress={() => navigation.navigate(ScreenNames.MainScreen)}
        >
            <BtnHomeStl>
                {
                    isDarkTheme ?
                        <ImageStl source={require('../../attachments/dark-theme/btn-home-dark.png')}/>
                                :
                        <ImageStl source={require('../../attachments/light-theme/btn-home.png')}/>
                }

            </BtnHomeStl>
        </TouchableOpacity>

    )
}