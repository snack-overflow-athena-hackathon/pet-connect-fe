import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const UserCard = ({
  firstName,
  lastName,
  pronouns,
  gender,
  preferredName,
  email,
  bio,
  pictureUrl,
  id
}) => {
  return (
    <Card style={{ width: "30rem", margin: "15px" }}>
      <Link to={`/user/${id}`}>
        <Card.Img
          style={{
            borderBottom: "1px solid white",
            backgroundColor: "#a39594",
          }}
          variant="top"
          src={pictureUrl}
        />
      </Link>
      <Card.Body style={{ backgroundColor: "#607744" }}>
        <Card.Text style={{ backgroundColor: "#607744" }}>
          First Name: {firstName}
        </Card.Text>
        <Card.Text style={{ backgroundColor: "#607744" }}>
          Last Name: {lastName}
        </Card.Text>
        <Card.Text style={{ backgroundColor: "#607744" }}>
          Pronouns: {pronouns}
        </Card.Text>
        <Card.Text style={{ backgroundColor: "#607744" }}>
          Preferred Name: {preferredName}
        </Card.Text>
        <Card.Text style={{ backgroundColor: "#607744" }}>
          Gender: {gender}
        </Card.Text>
        <Card.Text style={{ backgroundColor: "#607744" }}>
          Email: {email}
        </Card.Text>
        <Card.Text style={{ backgroundColor: "#607744" }}>
          Bio: {bio}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
