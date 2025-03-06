/* eslint-disable react/prop-types */
function Button({ buttonName, onClick }) {
    return (
        <button
            className="bg-blue-600 text-white py-2 px-6 text-md rounded-lg transition duration-300 ease-in-out transform hover:bg-blue-400 hover:scale-102"
            onClick={onClick}
        >
            {buttonName}
        </button>
    )
}

export default Button