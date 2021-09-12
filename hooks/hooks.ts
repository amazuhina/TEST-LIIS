import {useDispatch, useSelector} from "react-redux";
import {textSelector} from "../slices/text-slice";
import {useNavigation} from "@react-navigation/native";
import {addTask, AddTaskPayload} from "../slices/task-slice";

export const useAddTask = (): () => void => {
    const actualText = useSelector(textSelector)
    const navigation = useNavigation()

    const dispatch = useDispatch()

    const addTaskToList = () => {
        if (actualText == '') {
            return
        }

        const payload: AddTaskPayload = {
            text: actualText
        }
        dispatch(addTask(payload))
    }

    const onAddTask = () => {
        addTaskToList()
        navigation.goBack()
    }
    return onAddTask
}