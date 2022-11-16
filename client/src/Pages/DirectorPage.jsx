import { useState, useEffect } from "react"
import { NavBar } from "../Components"

import { useLocation } from "react-router-dom"

const DirectorPage = () => {
  const [director, setDirector] = useState(null)
  const location = useLocation()
  // const id = location.state._id
  const id = "6370f14332e09f4df0bbbee3"

  useEffect(() => {
    getDirectors(id)
  })

  const getDirectors = (id) => {
    fetch(`http://localhost:8080/directors/${id}`)
      .then(res => res.json())
      .then(data => setDirector(data))
      .catch(error => console.error(error))
  }

  return (
    <>
      <NavBar />
      {director ? <p>Hello {director.name}</p> : <p>Hell</p>}
    </>
  )
}

export default DirectorPage