import { useState, useEffect } from "react";
import { getPetsByUserId } from "../utils/api";
import { PetCard } from "./ PetCard";

export const UserPets = ({ id }) => {
  const [userPets, setUserPets] = useState([]);

  useEffect(() => {
    getPetsByUserId(id).then((petsFromApi) => {
      setUserPets(petsFromApi);
    });
  }, [id]);

  return (
    <ul className="PetList">
      {userPets.map((pet, index) => {
        return (
          <PetCard
            petName={pet.petName}
            breed={pet.breed}
            pictureUrl={pet.pictureUrl}
            ownerId={id}
            ownerDisplayName={pet.ownerDisplayName}
            id={pet.id}
            key={index}
          />
        );
      })}
    </ul>
  );
};
