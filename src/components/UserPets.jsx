import { useState, useEffect } from "react" 
import { getPetByUserId } from "../utils/api"
import { PetCard } from "./ PetCard";


export const UserPets = ({ id }) => {
    const [userPets, setUserPets] = useState([]);

    useEffect(() => {
        getPetByUserId(id).then((petsFromApi) => {
            setUserPets(petsFromApi)
        })
    }, [id])

    return (
        <ul className="PetList">
            {
        userPets.map((pet, index) => {
            return (
                <PetCard name={pet.petName} breed={pet.breed} pictureUrl={pet.pictureUrl} ownerId={pet.ownerId} key={index}/>
            )
        })
    }
            </ul>
    )
}