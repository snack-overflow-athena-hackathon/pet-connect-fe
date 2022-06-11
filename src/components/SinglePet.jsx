import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSinglePet } from "../utils/api";
import { Button, Card } from "react-bootstrap";

export const SinglePet = () => {
  const [pet, setPet] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getSinglePet(id).then((petFromApi) => {
      setPet(petFromApi);
    });
  }, [id]);

  return (
    <div className="single-pet-container">
      <Card>
        <Card.Img
          style={{ borderBottom: "1px solid white" }}
          variant="top"
          src={pet.pictureUrl}
        />
        <Card.Body style={{ backgroundColor: "#607744" }}>
          <Card.Title style={{ backgroundColor: "#607744" }}>
            {pet.name}
          </Card.Title>
          <Card.Text style={{ backgroundColor: "#607744" }}>
            {pet.location}
          </Card.Text>
          <Card.Text style={{ backgroundColor: "#607744" }}>
            {pet.type}
          </Card.Text>
          <Card.Text style={{ backgroundColor: "#607744" }}>
            {pet.breed}
          </Card.Text>
          <Card.Text style={{ backgroundColor: "#607744" }}>
            {pet.gender}
          </Card.Text>
          <Card.Text style={{ backgroundColor: "#607744" }}>
            {pet.bio}
          </Card.Text>
          <Button style={{ margin: "5px" }} variant="dark">
            Book A Pet Date
          </Button>
          <Button style={{ margin: "5px" }} variant="dark">
            View {pet.ownerId}
          </Button>
          <Button style={{ margin: "5px" }} variant="dark">
            Contact {pet.ownerId}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};