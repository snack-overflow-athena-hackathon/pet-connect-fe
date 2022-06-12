import { useState, useEffect } from "react";
import { getUserById } from "../utils/api";
import { UserCard } from "./UserCard";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const MyProfile = () => {
  const [thisUser, setThisUser] = useState([]);
  const { isLoggedIn } = useContext(UserContext)
  console.log(isLoggedIn)

  useEffect(() => {
    if (isLoggedIn) {
      getUserById(isLoggedIn).then((userFromAPI) => {
        setThisUser(userFromAPI);
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
    <ul className="MyProfile">
          <UserCard
            firstName={thisUser.firstName}
            lastName={thisUser.lastName}
            pronouns={thisUser.pronouns}
            gender={thisUser.gender}
            preferredName={thisUser.preferredName}
            email={thisUser.email}
            bio={thisUser.bio}
            pictureUrl={thisUser.pictureUrl}
            id={thisUser.id}
          />
    </ul>
  );
};
