import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const nav = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if (username === 'admin' && password === 'admin') {
            localStorage.setItem('authToken', true)
            console.log('Login successful')
            nav('/')
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-purple-500">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">LOGIN</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Username:
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password:
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex w-full items-center justify-center">
                        <button
                            type="submit"
                            className="bg-purple-500 hover:bg-white text-white hover:text-purple-500 hover:border-purple-500 border-2 font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline w-1/2 transition-colors duration-300"
                        >
                            LOGIN
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Login