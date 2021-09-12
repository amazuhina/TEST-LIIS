import React, {useEffect} from 'react'
import styled from 'styled-components'
import {View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {addText, AddTextPayload} from '../slices/text-slice';
import {isDarkSelector} from "../slices/theme-slice";
import {Header} from "../components/header/header";
import {BtnSaveTask} from "../components/buttons/btn-save-task";
import {TaskInput} from "../feature/task-input/task-input";
import {BtnCancel} from "../components/buttons/btn-cancel";
import { useAddTask } from '../hooks/hooks';
import {ScreenNames} from "../navigate";



const TaskScreenStl = styled(View)<{isDarkTheme: boolean}>`
  
  background-color: #fff;
  flex: 1;
  ${({isDarkTheme}) => !isDarkTheme ? `background-color: #fff` : `background-color: #333` }
`




export const TaskScreen = ({}) => {

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

    const onAddTask: () => void = useAddTask()

    return (
        <TaskScreenStl
            isDarkTheme={isDarkTheme}
        >
            <Header
                title={''}
                RightBtn={<BtnSaveTask onHandle={onAddTask} />}
                // @ts-ignore
                LeftBtn={<BtnCancel onHandle={() => navigation.navigate(ScreenNames.MainScreen)}/>}/>
            <TaskInput/>
        </TaskScreenStl>
    )
}

