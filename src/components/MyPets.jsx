import { useState, useEffect } from "react";
import { getPetsByUserId } from "../utils/api";
import { PetCard } from "./ PetCard";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const MyPets = () => {
  const [allPets, setAllPets] = useState([]);
  const { isLoggedIn } = useContext(UserContext)
  console.log(isLoggedIn)

  useEffect(() => {
    if (isLoggedIn) {
      getPetsByUserId(isLoggedIn).then((petsFromAPI) => {
        setAllPets(petsFromAPI);
      });
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <div style={{display: "inline-block"}}>
      <Link
      to="/login" style={{color: "#607744"}}>Sign in</Link> to access your appointments!
      </div>
    )
  }

  return (
    <ul className="PetsList">
      {allPets.map((pet, index) => {
        return (
          <PetCard
            petName={pet.petName}
            breed={pet.breed}
            pictureUrl={pet.pictureUrl}
            ownerId={pet.ownerId}
            ownerDisplayName={pet.ownerDisplayName}
            id={pet.id}
            key={index}
          />
        );
      })}
    </ul>
  );
};
