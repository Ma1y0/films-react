import { useState } from "react"
import { NavBar, EditAndDeleteDirector } from "../../Components"

const DirectorsAdmin = () => {
    const [formData, setFormData] = useState({
        name: ""
    })

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onCreate = async (e) => {
        e.preventDefault()
        const { name } = formData

        try {
            const newDirector = await fetch("http://localhost:8080/directors", {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: name
                })
            })

            //TODO remove this
            window.location = "/admin/directors"
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <NavBar />
            <div className="w-full h-screen mt-6">
                <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] flex justify-center">Directors Admin</h1>
                <form className="flex justify-center mb-6">
                    <input className="font-poppins bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" type="text" name="name" placeholder="name" value={formData.name} onChange={onChange} required />
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" name="submit" onClick={onCreate} >Submit</button>
                </form>

                <EditAndDeleteDirector />
            </div>
        </>
    )
}

export default DirectorsAdmin