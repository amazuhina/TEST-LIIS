import React from 'react'
import styled from 'styled-components'
import {ScrollView, Text} from 'react-native';
import {useSelector} from "react-redux";
import {ITask} from "../../models";
import { tasksSelector } from '../../slices/task-slice';
import { TaskItem } from './task-item/task-item';


const TaskListStl = styled(ScrollView)``


const TextStl = styled(Text)`
  color: #ddd;
  margin: 50px auto;
  font-size: 18px;
`


export const TaskList: React.FunctionComponent = () => {

    const tasksList: Array<ITask> | null = useSelector(tasksSelector)

    return (
        <TaskListStl>
            {
                (tasksList == null)
                    ?   <TextStl>Нет задач</TextStl>
                    : tasksList.map(i =>
                        <TaskItem id={i.id} text={i.text} isDone={i.isDone}/>
                        )
            }
        </TaskListStl>
    )
}