import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const PetCard = ({ petName, location, pictureUrl, ownerId, id, ownerDisplayName }) => {
  console.log(id);

  return (
    <Card style={{ width: "18rem", margin: "15px" }}>
      <Link to={`/pets/${id}`}>
        <Card.Img
          style={{ borderBottom: "1px solid white", backgroundColor: "#a39594" }}
          variant="top"
          src={pictureUrl}
        />
      </Link>
      <Card.Body style={{ backgroundColor: "#607744" }}>
        <Card.Title style={{ backgroundColor: "#607744" }}>
          {petName}
        </Card.Title>
        <Card.Text style={{ backgroundColor: "#607744" }}>
          Location: {location}
        </Card.Text>
        <Card.Text style={{ backgroundColor: "#607744" }}>
          Belongs to:{" "}
          <Link
            style={{
              backgroundColor: "#607744",
              color: "#fff",
              textDecoration: "none",
            }}
            to={`/users/${ownerId}`}
          >
            {ownerDisplayName}
          </Link>
        </Card.Text>
        <Link to={`/pets/${id}`}>
          <Button variant="dark">View Pet</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
