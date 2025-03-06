/* eslint-disable react/prop-types */
import Button from "./Button"
import { useState } from "react"
import { motion } from "framer-motion"
import { IoCloseSharp } from "react-icons/io5"
import { toast } from 'react-toastify'
import { todoApi } from "../assets/todoApi"
import { useMutation, useQueryClient } from "@tanstack/react-query"

function TaskModal({ closeTasks, task = {}, isUpdate = false }) {
    const [taskName, setTaskName] = useState(task.taskName || '')
    const [taskDescription, setTaskDescription] = useState(task.taskDescription || '')

    const queryClient = useQueryClient()

    const updateMutation = useMutation({
        mutationFn: todoApi.updateTodos,
        onSuccess: () => {
            queryClient.invalidateQueries('test')
            const notifyUpdate = () => toast.success('Task updated successfully')
            notifyUpdate()
            setTaskName('')
            setTaskDescription('')
            closeTasks()
        }
    })

    const addMutation = useMutation({
        mutationFn: todoApi.addTodos,
        onSuccess: () => {
            queryClient.invalidateQueries('test')
            const notifyTask = () => toast.success('Task added successfully')
            notifyTask()
            setTaskName('')
            setTaskDescription('')
            closeTasks()
        }
    })


    const handleAddTask = () => {
        if (taskName === '' || taskDescription === '') {
            const notify = () => toast.error('Please fill all the fields')
            notify()
        } else {
            if (isUpdate) {
                if (taskName === task.taskName && taskDescription === task.taskDescription) {
                    const notifySame = () => toast.error('No changes made')
                    notifySame()
                    return
                }
                const taskNew = {
                    id: task.id,
                    taskName: taskName,
                    taskDescription: taskDescription,
                    done: task.done,
                }
                try {
                    updateMutation.mutate(taskNew)
                } catch (error) {
                    const notifyError = () => toast.error('Task update failed')
                    console.log(error)
                    notifyError()
                    return
                }
                return
            }

            const newTask = {
                taskName: taskName,
                taskDescription: taskDescription,
                done: false,
            }

            addMutation.mutate(newTask)

            // const response = axios.post('http://localhost:8080/todos', newTask)
            // console.log(response)
            // const notifyTask = () => toast.success('Task added successfully')
            // notifyTask()
            // // dispatch(addTask(newTask))
            // setTaskName('')
            // setTaskDescription('')
            // closeTasks()
        }
    }


    return (
        <motion.div
            className="fixed inset-0 bg-black/50 bg-opacity-10 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="bg-white relative rounded-lg p-10 py-6 min-w-2/3 flex gap-4 justify-center items-start flex-col shadow-md"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <IoCloseSharp className="absolute top-2 right-2
                 text-gray-800 text-2xl cursor-pointer"
                    onClick={closeTasks}
                />
                <h1 className="text-gray-800 text-2xl font-bold mb-2">Create new task</h1>
                <input
                    type="text"
                    placeholder="Task name"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 w-full"
                />
                <input
                    // big text field
                    type="text"
                    placeholder="Task description"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 pb-10 w-full"
                />
                <Button buttonName={isUpdate ? "Update task" : "Add task"} onClick={handleAddTask} />
            </motion.div>
        </motion.div>
    )
}

export default TaskModal