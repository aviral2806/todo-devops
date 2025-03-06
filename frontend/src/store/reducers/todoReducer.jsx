import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
};

const todoSlice = createSlice({
    name: "todoList",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload)
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((tasks) => tasks.id !== action.payload)
            console.log(state.tasks)
        },
        toggleTasks: (state, action) => {
            const task = state.tasks.find((tasks) => tasks.id === action.payload)
            if (task) {
                task.done = !task.done
            }
        },
        updateTask: (state, action) => {
            state.tasks =
                state.tasks.map((task) => task.id === action.payload.id ? { ...task, taskName: action.payload.taskName, taskDescription: action.payload.taskDescription } : task)
        }
    }
});

export const { addTask, removeTask, toggleTasks, updateTask } = todoSlice.actions;
export default todoSlice.reducer;