import { useState } from "react"
import { popcorn } from "../assets"

const NavBar = () => {
  const [open, setOpen] = useState(false)

  const navLinks = [
    {
      id: "films",
      name: "Films"
    },
    {
      id: "directors",
      name: "Directors"
    },
    {
      id: "actors",
      name: "Actors"
    }
  ]
  return (
    <nav className="py-6 w-full flex">
      <img className="w-[80px]" src={popcorn} alt="logo"/>
      <ul className="list-none flex items-center justify-end flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav. index}>
            <a href={`#${nav.id}`} className={`sm:flex hidden text-white cursor-pointer font-poppins font-normal ml-5`}>{nav.name}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex">

      </div>
    </nav>
  )
}

export default NavBar