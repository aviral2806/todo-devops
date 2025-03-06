import axios from 'axios'
const apiUrl = import.meta.env.VITE_API_URL + 'todos'
export const todoApi = {
    getTodos: async () => {
        const response = await axios.get(apiUrl)
        return response.data
    },
    addTodos: async (newTask) => {
        const response = await axios.post(apiUrl, newTask)
        return response.data
    },
    updateTodos: async (task) => {
        const response = await axios.put(`${apiUrl}/${task.id}`, task)
        return response.data
    },
    toggleDone: async (id) => {
        const response = await axios.patch(apiUrl + `/${id}`)
        return response.data
    },
    deleteTodo: async (id) => {
        const response = await axios.delete(apiUrl + `/${id}`)
        return response.data
    }
}