import React from 'react'
import {Switch, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {isDarkSelector, toggleTheme} from "../../slices/theme-slice";


export const BtnToggle: React.FunctionComponent = ({}) => {

    const isDarkTheme = useSelector(isDarkSelector)
    const dispatch = useDispatch()

    const toggleSwitch = () => {
        dispatch(toggleTheme())
    }

    return (
        <TouchableOpacity>
            <Switch
                trackColor={{ false: "#767577", true: "#B2D2FF" }}
                thumbColor={isDarkTheme ? "#006CFF" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isDarkTheme}
            />
        </TouchableOpacity>
    )
}