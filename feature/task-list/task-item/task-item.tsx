import React from 'react'
import styled from 'styled-components'
import {Text, View} from 'react-native';
import {ITask} from "../../../models";
import {Mark} from './mark/mark';
import { BtnDelete } from '../../../components/buttons/btn-delete';
import {useSelector} from "react-redux";
import {isDarkSelector} from "../../../slices/theme-slice";


const TaskItemStl = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom-width: 1px;
  border-bottom-color:  #dadada;
  align-items: center;
`


const TextStl = styled(Text)<{clicked: boolean, isDarkTheme: boolean}>`
  color: #000;
  font-size: 18px;
  width: 80%;
  ${({clicked}) => clicked && `    
    text-decoration: line-through;
    color: #ddd;
  `}
  ${({isDarkTheme}) => !isDarkTheme ? `color: #333` : `color: #fff`}
`



interface TaskTextProps extends ITask {}

export const TaskItem: React.FunctionComponent<TaskTextProps> = ({id, text, isDone}) => {

    const isDarkTheme = useSelector(isDarkSelector)

    return (
        <TaskItemStl>
            <Mark isDone={isDone} id={id}/>
            <TextStl
                clicked={isDone}
                isDarkTheme={isDarkTheme}
            >
                {text}
            </TextStl>
            <BtnDelete id={id}/>
        </TaskItemStl>
    )
}