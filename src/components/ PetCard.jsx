import { Card, Button } from "react-bootstrap";

export const PetCard = ({ name, location, pictureUrl, ownerId }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={pictureUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Location: {location}</Card.Text>
        <Card.Text>Belongs to: {ownerId}</Card.Text>
        <Button variant="success">View Pet</Button>
      </Card.Body>
    </Card>
  );
};
