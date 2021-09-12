import React from 'react'
import styled from 'styled-components'
import {TouchableOpacity, View, Image} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {changeStatus, ChangeStatusPayload } from '../../../../slices/task-slice';
import {isDarkSelector} from "../../../../slices/theme-slice";


const MarkStl = styled(View)``

export const ImageStl = styled(Image)``

interface MarkProps {
    isDone: boolean
    id: number
}

export const Mark: React.FunctionComponent<MarkProps> = ({isDone, id}) => {

    const isDarkTheme = useSelector(isDarkSelector)

    const dispatch = useDispatch()

    const onChangeStatus = () => {
        const payload: ChangeStatusPayload = {
            id
        }
        dispatch(changeStatus(payload))
    }


    return (
        <TouchableOpacity onPress={onChangeStatus}>
            <MarkStl>
                {
                    isDone ?
                        isDarkTheme ?
                            <ImageStl source={require('../../../../attachments/dark-theme/mark-isDone-dark.png')}/>
                                    :
                            <ImageStl source={require('../../../../attachments/light-theme/mark-isDone.png')}/>
                            :   
                        <ImageStl source={require('../../../../attachments/light-theme/mark-empty.png')}/>
                }
            </MarkStl>
        </TouchableOpacity>

    )
}