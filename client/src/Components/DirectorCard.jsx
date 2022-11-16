import { noPicture } from "../assets"

const DirectorCard = ({ director }) => {
    const {_id, name} = director
    const profilePicture = noPicture

    return (
        <div className="outline outline-1 border-black p-5 m-1 w-90 h-90">
            <img className="w-40" src={profilePicture} alt="Profile Picture" />
            <h1 className="font-poppins">{name}</h1>
        </div>
    )
}

export default DirectorCard