import { useState, useEffect } from "react" 
import { Card, Button } from "react-bootstrap";
import { getPetByUserId } from "../utils/api"
import { PetCard } from "./ PetCard";


export const UserPets = ({ id }) => {
    const [userPets, setUserPets] = useState({});

    useEffect(() => {
        getPetByUserId(id).then((petsFromApi) => {
            setUserPets(petsFromApi)
        })
    })

    return (
        userPets.map((userPet) => {
            return (
                <PetCard name={userPet.name} location={userPet.location} pictureUrl={userPet.pictureUrl} ownerId={userPet.ownerId} />
            )
        })
    )
}