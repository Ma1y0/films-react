import { useState } from "react"
import { popcorn, menu, close } from "../assets"

const NavBar = () => {
  const [open, setOpen] = useState(false)

  const navLinks = [
    {
      path: "/films",
      name: "Films"
    },
    {
      path: "/directors",
      name: "Directors"
    },
    {
      path: "/actors",
      name: "Actors"
    }
  ]
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <nav className="py-6 w-full flex">
              <a href="/" className="flex items-center"><img className="w-[80px]" src={popcorn} alt="logo"/></a>
              <ul className="list-none flex items-center justify-end flex-1">
                {navLinks.map((nav, index) => (
                  <li key={nav.index}>
                    <a href={`${nav.path}`} className={`sm:flex hidden text-white cursor-pointer font-poppins font-normal text-[20px] ml-5`}>{nav.name}</a>
                  </li>
                ))}
              </ul>

              <div className="sm:hidden flex">
                <img className="w-[32px]" src={open ? close : menu} onClick={() => setOpen(!open)} />
                <div className={`${open ? "flex" : "hidden"} column absolute top-20 right-0 bg-primary `}>
                  <ul className="list-none flex flex-col justify-end items-end flex-1 m-5">
                    {navLinks.map((nav, index) => (
                      <li key={nav.index}>
                        <a href={`${nav.path}`} className={`sm:hidden text-white cursor-pointer font-poppins font-normal ml-5 text-[20px]`}>{nav.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
  )
}

export default NavBar