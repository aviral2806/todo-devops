/* eslint-disable react/prop-types */
import { MdOutlineDeleteForever } from "react-icons/md";
import { IoCheckmarkSharp, IoCloseSharp, IoPencilSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { todoApi } from "../assets/todoApi";
import { toast } from "react-toastify";

function Task({ task, handleUpdate }) {
    const queryClient = useQueryClient()
    const toggleMutation = useMutation({
        mutationFn: todoApi.toggleDone,
        onSuccess: () => {
            queryClient.invalidateQueries('test')
        }
    })
    const deleteMutation = useMutation({
        mutationFn: todoApi.deleteTodo,
        onSuccess: () => {
            const notifyDelete = () => toast.success('Task deleted successfully')
            notifyDelete()
            queryClient.invalidateQueries('test')
        }
    })
    return (
        <motion.div
            className="bg-black/5 rounded-md max-w-8/9 w-8/9 min-h-20 flex justify-between items-center p-2 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
        >
            <div className="flex flex-col justify-center items-start w-8/9 overflow-hidden break-words text-wrap">
                <h1 className={`text-2xl ${task.done ? "line-through text-gray-500" : "text-gray-700"}  select-none font-bold`}>{task.taskName}</h1>
                <h3 className={` text-md ${task.done ? "line-through text-gray-500" : "text-gray-700"} select-none font-bold text-wrap break-words`}>{task.taskDescription}</h3>
            </div>
            <div className="flex gap-2">
                <IoPencilSharp
                    className="text-gray-800/60 text-xl mt-[2px] font-bold cursor-pointer"
                    onClick={() => handleUpdate(task)}
                />
                {!task.done ? (
                    <IoCheckmarkSharp
                        className="text-gray-800/60 text-2xl font-bold cursor-pointer"
                        onClick={() => toggleMutation.mutate(task.id)}
                    />
                ) : (
                    <IoCloseSharp
                        className="text-gray-800/60 text-2xl font-bold cursor-pointer"
                        onClick={() => toggleMutation.mutate(task.id)}
                    />
                )}
                <MdOutlineDeleteForever
                    className="text-gray-800/60 text-2xl cursor-pointer"
                    onClick={() => deleteMutation.mutate(task.id)}
                />
            </div>
        </motion.div>
    )
}

export default Task