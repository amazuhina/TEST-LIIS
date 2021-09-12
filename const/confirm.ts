import {Alert} from "react-native";

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