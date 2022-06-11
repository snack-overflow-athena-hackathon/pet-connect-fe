import { Card, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { getSingleUser } from "../utils/api";
import { useEffect, useState } from "react";
import { UserPets } from "./UserPets";

export const SingleUser = () => {
  const [user, setUser] = useState({});
    const { id } = useParams();

  useEffect(() => {
    getSingleUser(id).then((userFromApi) => {
      setUser(userFromApi);
    });
  }, [id]);

  return (
    <div className="single-user-container">
      <Card>
        <Card.Img
          style={{ borderBottom: "1px solid white" }}
          variant="top"
          src={user.pictureUrl}
        />
        <Card.Body style={{ backgroundColor: "#607744" }}>
          <Card.Title style={{ backgroundColor: "#607744" }}>
            {user.name} ({user.pronouns})
          </Card.Title>
          <Card.Text style={{ backgroundColor: "#607744" }}>
            {user.location}
          </Card.Text>
          <Card.Text style={{ backgroundColor: "#607744" }}>
            {user.bio}
          </Card.Text>
          <Card.Text style={{ backgroundColor: "#607744" }}>
            {user.bio}
          </Card.Text>
          <Button style={{ margin: "5px" }} variant="dark">
            Contact {user.userId}
          </Button>
        </Card.Body>
      </Card>
      <UserPets id={id}/>
    </div>
  );
};
