import {combineReducers} from 'redux'
import { taskReducer } from '../slices/task-slice'
import { textReducer } from '../slices/text-slice'
import { themeReducer } from '../slices/theme-slice'



export const rootReducer = combineReducers({
    task: taskReducer,
    text: textReducer,
    theme: themeReducer,

})