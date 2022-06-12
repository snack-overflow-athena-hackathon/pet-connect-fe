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
        <Card.Text style={{ backgroundColor: "#607744" }}>
          Date: {new Date(appointmentDateTimeUTC).toLocaleDateString()}
        </Card.Text>
        <Card.Text style={{ backgroundColor: "#607744" }}>
          Time: {new Date(appointmentDateTimeUTC).toLocaleTimeString()}
        </Card.Text>
        <Card.Text style={{ backgroundColor: "#607744" }}>
          Pet {petId}
        </Card.Text>
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
