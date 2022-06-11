import { PetCard } from "./ PetCard";
import { useState, useEffect} from 'react';
import { fetchAllPets } from "../data/data";
import { data } from "../data/data";

export const PetList = () => {
    const [allPets, setAllPets] = useState([]);

    useEffect(() => {
        // fetchAllPets().then((petsFromAPI) => {
        //     setAllPets(petsFromAPI)
        console.log(data)

        setAllPets(data)
        }, [])

    return (
        <ul className="PetList">
            {allPets.map((pet, index) => {
                return (
                <PetCard pet_name={pet.pet_name} description={pet.description} img_url={pet.img_url} owner={pet.owner} key={index}/>
                )
            })}
        </ul>
    )
}