import { Card, Button } from "react-bootstrap";

export const PetCard = ({ name, location, pictureUrl, ownerId }) => {
  return (
    <Card style={{ width: "18rem", margin: "15px" }}>
      <Card.Img
        style={{ borderBottom: "1px solid white" }}
        variant="top"
        src={pictureUrl}
      />
      <Card.Body style={{ backgroundColor: "#607744" }}>
        <Card.Title style={{ backgroundColor: "#607744" }}>{name}</Card.Title>
        <Card.Text style={{ backgroundColor: "#607744" }}>
          Location: {location}
        </Card.Text>
        <Card.Text style={{ backgroundColor: "#607744" }}>
          Belongs to: {ownerId}
        </Card.Text>
        <Button variant="dark">View Pet</Button>
      </Card.Body>
    </Card>
  );
};
