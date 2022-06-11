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
            name={pet.name}
            location={pet.location}
            pictureUrl={pet.pictureUrl}
            ownerId={pet.ownerId}
            key={index}
          />
        );
      })}
    </ul>
  );
};
