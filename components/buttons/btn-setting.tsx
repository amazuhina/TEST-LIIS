import React from 'react'
import styled from 'styled-components'
import {TouchableOpacity, View} from 'react-native';
import {ImageStl} from "../../feature/task-list/task-item/mark/mark";
import {useNavigation} from "@react-navigation/native";
import {ScreenNames} from "../../navigate";
import {useSelector} from "react-redux";
import {isDarkSelector} from "../../slices/theme-slice";


const BtnSettingStl = styled(View)``



export const BtnSetting: React.FunctionComponent = () => {

    const navigation = useNavigation()

    const isDarkTheme = useSelector(isDarkSelector)



    return (
        <TouchableOpacity
            // @ts-ignore
            onPress={() => navigation.navigate(ScreenNames.SettingScreen)}
        >
            <BtnSettingStl>
                {
                    isDarkTheme ? (
                    <ImageStl
                       source={require('../../attachments/dark-theme/btn-setting-dark.png')}
                    />)
                    : (
                    <ImageStl
                        source={require('../../attachments/light-theme/btn-setting.png')}
                    />)
                }
            </BtnSettingStl>
        </TouchableOpacity>
    )
}