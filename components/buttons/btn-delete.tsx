import React, {useState} from 'react'
import styled from 'styled-components'
import {TouchableOpacity, View, Alert} from 'react-native';
import {ImageStl} from "../../feature/task-list/task-item/mark/mark";
import {DeleteTackPayload, deleteTask} from "../../slices/task-slice";
import {useDispatch} from "react-redux";


const BtnDeleteStl = styled(View)`
`


interface BtnDeleteProps {
    id: number
}


//TODO: перенести confirm?

export const confirm = (onConfirm: () => void) => Alert.alert('Are you sure?', '', [
    {
        text: 'cancel',
        onPress: () => {},
        style: 'cancel'
    },
    {
        text: 'ok',
        onPress: onConfirm,
        style: 'default'
    },
], {
    cancelable: true,
    onDismiss: () => {}
})


export const BtnDelete: React.FunctionComponent<BtnDeleteProps> = ({id}) => {

    const dispatch = useDispatch()

    const onDelete = () => {
        const payload: DeleteTackPayload = {
            id
        }
        dispatch(deleteTask(payload))
    }

    return (
        <>
            <TouchableOpacity
                onPress={() => confirm(onDelete)}
            >
                <BtnDeleteStl>
                    <ImageStl source={require('../../attachments/light-theme/btn-delete.png')}/>
                </BtnDeleteStl>
            </TouchableOpacity>
        </>
    )
}

