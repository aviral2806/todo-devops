import Button from "./components/Button"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import TaskModal from "./components/TaskModal"
import { ToastContainer } from 'react-toastify'
import Task from "./components/Task"
import { todoApi } from "./assets/todoApi"
import { useQuery } from '@tanstack/react-query'
import { squircle } from 'ldrs'

function App() {

  const { data: todos, isFetched, isLoading } = useQuery({
    queryKey: ['test'],
    queryFn: todoApi.getTodos,
  })

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [task, setTask] = useState({})
  const [isUpdate, setIsUpdate] = useState(false)
  // const taskList = useSelector((state) => state.todoList.tasks)

  const openAddTasks = () => {
    setTask({})
    setIsUpdate(false)
    setIsModalOpen(true)
  }
  const closeAddTasks = () => {
    setTask({})
    setIsUpdate(false)
    setIsModalOpen(false)
  }

  const handleUpdateTask = (task) => {
    setTask(task)
    setIsUpdate(true)
    setIsModalOpen(true)
  }
  squircle.register()

  return (
    <>
      <div className="bg-purple-500 h-full min-h-screen flex flex-col justify-start items-center p-18">
        <div className="fixed bg-gradient-to-t from-purple-500 to-purple-800 top-0 h-16 w-full flex justify-end px-12 items-center">
          <h1
            className="text-white cursor-pointer border-2 border-white rounded-2xl p-1 px-5 hover:bg-white hover:text-purple-800 
            transition-all transform hover:scale-108 duration-500"
            onClick={() => {
              localStorage.removeItem('authToken')
              window.location.href = '/login'
            }}
          >
            Logout - push
          </h1>
        </div>
        <div className="rounded-lg flex flex-col justify-start items-center p-5 py-8 mt-8 bg-white shadow-md min-h-99/100 min-w-6/7 gap-4">
          <div className="w-full flex justify-between items-center px-2 mb-6 h-full">
            <h1 className="text-gray-800 text-3xl font-bold font-[`Lekton`] lekton-font">Welcome to Todo App</h1>
            <Button buttonName="Add task" onClick={openAddTasks} />
          </div>
          {isLoading ? (
            <l-squircle
              size="37"
              stroke="5"
              stroke-length="0.15"
              bg-opacity="0.1"
              speed="0.9"
              color="black"
            ></l-squircle>
          ) : (
            isFetched && todos.map((task, index) => (
              <AnimatePresence key={index}>
                <Task task={task} handleUpdate={handleUpdateTask} />
              </AnimatePresence>
            ))
          )}
        </div>
        <AnimatePresence>
          {isModalOpen && <TaskModal closeTasks={closeAddTasks} task={task} isUpdate={isUpdate} />}
        </AnimatePresence>
        <ToastContainer />
      </div >
    </>
  )
}

export default App
