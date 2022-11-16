import { NavBar, DirectorCard } from "../Components"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const DirectorsPage = () => {
  const [directors, setDirectors] = useState([])

  useEffect(() => {
    getDirectors()
  }, [])

  const getDirectors = () => {
    fetch("http://localhost:8080/directors")
      .then(res => res.json())
      .then(data => setDirectors(data))
      .catch((error) => console.error("Error: ", error))
  }

  return (
    <>
      <NavBar />
      <div>
        <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] flex justify-center">Directors</h1>
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4 justify-center">
            {directors.map((director) => (
              <div className="w-[220px]">
                <Link to="/director" state={director}><DirectorCard key={director.id} director={director} /></Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default DirectorsPage