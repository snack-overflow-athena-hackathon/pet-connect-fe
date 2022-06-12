import { useState, useEffect } from "react" 
import { getPetByUserId } from "../utils/api"
import { PetCard } from "./ PetCard";


export const UserPets = ({ id }) => {
    const [userPets, setUserPets] = useState({});

    useEffect(() => {
        getPetByUserId(id).then((petsFromApi) => {
            console.log(id)
            console.log(petsFromApi, "<<<< PETS FROM API")
            setUserPets(petsFromApi)
        })
    }, [id])

    return (
        userPets.map((pet) => {
            return (
                <PetCard name={pet.petName} breed={pet.breed} pictureUrl={pet.pictureUrl} ownerId={pet.ownerId} />
            )
        })
    )
}