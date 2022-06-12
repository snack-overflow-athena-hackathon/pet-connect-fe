import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { getAllUsers } from "../utils/api";
import { Button, Card } from "react-bootstrap";
// import { UserCard } from "./UserCard";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  useEffect(() => {
    getAllUsers().then((usersFromApi) => {
      setUsers(usersFromApi);
    });
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(null);
    localStorage.clear();
  };

  return (
    <>
      {!isLoggedIn ? (
        <Button variant="dark" onClick={handleLogout()}>
          Log Out
        </Button>
      ) : (
        <></>
      )}
      {users.map((user) => {
        return (
          <div key={user.id}>
            <Card style={{ width: "18rem", margin: "15px" }}>
              <Link to={`/users/${user.id}`}>
                <Card.Img
                  style={{
                    borderBottom: "1px solid white",
                    backgroundColor: "#a39594",
                  }}
                  variant="top"
                  src={user.pictureUrl}
                />
              </Link>
              <Card.Body style={{ backgroundColor: "#607744" }}>
                <Card.Title style={{ backgroundColor: "#607744" }}>
                  {user.displayName}
                </Card.Title>
                <Button
                  variant="dark"
                  href="/"
                  onClick={() => {
                    localStorage.setItem("user", user.id);
                    setIsLoggedIn(user.id);
                  }}
                >
                  Log In As {user.displayName}
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </>
  );
};
