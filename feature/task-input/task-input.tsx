import React, {useEffect} from 'react'
import styled from 'styled-components'
import {TextInput} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {addText, AddTextPayload, textSelector } from '../../slices/text-slice';
import {isDarkSelector} from "../../slices/theme-slice";




const TextInputStl = styled(TextInput)<{isDarkTheme: boolean}>`
  font-size: 18px;
  padding: 10px;
  &::placeholder {
    color: red;
  }
  ${({isDarkTheme}) => !isDarkTheme ? `color: #333` : `color: #fff`}
`


export const TaskInput = ({}) => {

    const isDarkTheme = useSelector(isDarkSelector)

    const clearInput = () => {
        const payload: AddTextPayload = {
            text: ''
        }
        dispatch(addText(payload))
    }

    useEffect(() => {
        clearInput()
    }, [])


    const dispatch = useDispatch()

    const onSaveText = (taskValue: string) => {

        const payload: AddTextPayload = {
            text: taskValue
        }
        dispatch(addText(payload))
    }

    const task = useSelector(textSelector)

    return (

            <TextInputStl
                isDarkTheme={isDarkTheme}
                placeholder={'What do you want to do?'}
                placeholderTextColor="#ddd"
                value={task}
                onChange={(event: any) => {onSaveText(event.nativeEvent.text)}}
            />

    )
}