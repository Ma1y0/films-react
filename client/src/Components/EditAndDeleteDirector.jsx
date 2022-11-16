import { useEffect } from "react"
import { useState } from "react"

const EditAndDeleteDirector = () => {
  const [directors, setDirectors] = useState(null)

  useEffect(() => {
    getDirectors()
  }, [])

  const getDirectors = () => {
    fetch("http://localhost:8080/directors")
      .then(res => res.json())
      .then(data => setDirectors(data))
      .catch((error) => console.error("Error: ", error))
  }

  const deleteDirector = (id) => {
    try {
      fetch(`http://localhost:8080/directors/${id}`, {
        method: "DELETE",
        mode: "cors",
        cache: "no-cache"
      })
      .catch((error) => console.error(error))

      setDirectors(directors.filter(director => director._id !== id))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <table className="w-full text-center ">
        <tbody>
          {directors ? 
            directors.map(director => (
                <tr key={director._id}>
                    <td scope="row"><p className="font-poppins">{director.name}</p></td>
                    <td scope="row"><button className="font-poppins font-semibold focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 rounded-lg text-sm px-5 py-2.5 mb-2">Edit</button></td>
                    <td scope="row"><button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg text-sm px-5 py-2.5 mb-2" onClick={() => deleteDirector(director._id)}>Delete</button></td>
                </tr>
            ))
          : <p>There are no directors</p>}
        </tbody>

      </table>
    </>
  )
}

export default EditAndDeleteDirector