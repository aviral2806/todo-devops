import { Navigate } from "react-router-dom"

function ProtectedRoutes({ children }) {

    const token = localStorage.getItem('authToken')
    if (!token) {
        return <Navigate to="/login" />
    } else {
        return children
    }
}

export default ProtectedRoutes
