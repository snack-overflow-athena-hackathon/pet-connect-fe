import { PetCard } from "./ PetCard";
import { useState, useEffect } from "react";
import { fetchAllPets } from "../utils/api";

export const PetList = () => {
  const [allPets, setAllPets] = useState([]);

  useEffect(() => {
    fetchAllPets().then((petsFromAPI) => {
      setAllPets(petsFromAPI);
    });
  }, []);

  console.log(allPets[0]);

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
