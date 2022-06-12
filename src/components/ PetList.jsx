import { PetCard } from "./ PetCard";
import { useState, useEffect } from "react";
import { getAllPets } from "../utils/api";

export const PetList = () => {
  const [allPets, setAllPets] = useState([]);

  useEffect(() => {
    getAllPets().then((petsFromAPI) => {
      setAllPets(petsFromAPI);
    });
  }, []);

  return (
    <ul className="PetList">
      {allPets.map((pet, index) => {
        return (
          <PetCard
            petName={pet.petName}
            location={pet.location}
            pictureUrl={pet.pictureUrl}
            ownerDisplayName={pet.ownerDisplayName}
            ownerId={pet.ownerId}
            id={pet.id}
            key={index}
          />
        );
      })}
    </ul>
  );
};
