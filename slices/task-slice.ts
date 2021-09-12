import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TStore} from "../redux/store";
import {ITask} from "../models";




export interface DeleteTackPayload {
    id: number
}

export interface ChangeStatusPayload {
    id: number
}

export interface AddTaskPayload {
    text: string
}


interface TSliceState {
    tasks: Array<ITask> | null
}


const initialState: TSliceState = {
    tasks: null
}



const taskSlice = createSlice({
    name: 'taskSlice',
    initialState: initialState,
    reducers: {
        addTask: (state: TSliceState, action:PayloadAction<AddTaskPayload>) => {
            if (state.tasks == null) {
                const emptyTasks: Array<ITask> = []
                state.tasks = emptyTasks
            }

            const task: ITask = {
                id: (new Date()).getTime(),
                text: action.payload.text,
                isDone: false
            }

            // const task: ITask = action.payload.task

            state.tasks.push(task)
        },
        changeStatus: (state: TSliceState, action: PayloadAction<ChangeStatusPayload>) => {
            if (state.tasks == null) {
                return
            }

            const index = state.tasks.findIndex(i => i.id == action.payload.id)

            if (index == -1) {
                return
            }

            const actualIsDone = state.tasks[index].isDone
            const invertIsDone = !actualIsDone
            state.tasks[index].isDone = invertIsDone
        },
        deleteTask: (state: TSliceState, action: PayloadAction<DeleteTackPayload>) => {
            if (state.tasks === null) {
                return
            }

            const index = state.tasks.findIndex(i => i.id === action.payload.id)
            state.tasks.splice(index, 1)

        }

    }
})



export const tasksSelector = (store: TStore) => store.task.tasks




export const {
    addTask,
    changeStatus,
    deleteTask
} = taskSlice.actions


export const taskReducer = taskSlice.reducer