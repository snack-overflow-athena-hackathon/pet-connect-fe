import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const AppointmentCard = ({
  appointmentDateTimeUTC,
  ownerId,
  visitorId,
  petId,
  id,
}) => {
  console.log(id);

  return (
    <Card style={{ width: "18rem", margin: "15px" }}>
      <Link to={`/Appointments/${id}`}></Link>
      <Card.Body style={{ backgroundColor: "#607744" }}>
        <Card.Title style={{ backgroundColor: "#607744" }}>
          Date and Time {appointmentDateTimeUTC}
        </Card.Title>
        <Card.Title style={{ backgroundColor: "#607744" }}>
          Pet {petId}
        </Card.Title>
        <Card.Text style={{ backgroundColor: "#607744" }}>
          Made By:{" "}
          <Link
            style={{
              backgroundColor: "#607744",
              color: "#fff",
              textDecoration: "none",
            }}
            to={`/users/${visitorId}`}
          >
            {visitorId}
          </Link>
        </Card.Text>
        <Card.Text style={{ backgroundColor: "#607744" }}>
          Pet belongs to:{" "}
          <Link
            style={{
              backgroundColor: "#607744",
              color: "#fff",
              textDecoration: "none",
            }}
            to={`/users/${ownerId}`}
          >
            {ownerId}
          </Link>
        </Card.Text>
        <Button href={`/Appointments/${id}`} variant="dark">
          View Full Appointment
        </Button>
      </Card.Body>
    </Card>
  );
};
