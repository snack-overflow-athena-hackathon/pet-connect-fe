import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getSingleAppointment } from "../utils/api";
import { Button, Card } from "react-bootstrap";

export const SingleAppointment = () => {
  const [appointment, setAppointment] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getSingleAppointment(id).then((appointmentFromApi) => {
      setAppointment(appointmentFromApi);
    });
  }, [id]);

  return (
    <div className="single-appointment-container">
      <Card>
        <Link to={`/pets/${id}`}>
          <Card.Img
            style={{
              borderBottom: "1px solid white",
              backgroundColor: "#a39594",
            }}
            variant="top"
            src={appointment.petPictureUrl}
          />
        </Link>
        <Card.Body style={{ backgroundColor: "#607744" }}>
          <Card.Title style={{ backgroundColor: "#607744" }}>
            {new Date(appointment.appointmentDateTimeUTC).toLocaleDateString()} @ {new Date(appointment.appointmentDateTimeUTC).toLocaleTimeString()}
          </Card.Title>
          <Card.Text style={{ backgroundColor: "#607744" }}>
            Pet {appointment.petName}
          </Card.Text>
          <Card.Text style={{ backgroundColor: "#607744" }}>
            Owner {appointment.ownerDisplayName}
          </Card.Text>
          <Card.Text style={{ backgroundColor: "#607744" }}>
            Visitor {appointment.visitorDisplayName}
          </Card.Text>
          <Button href={`/users/${appointment.visitorId}`} style={{ margin: "5px" }} variant="dark">
            View Visitor {appointment.visitorDisplayName}
          </Button>
          <Button href={`/users/${appointment.ownerId}`} style={{ margin: "5px" }} variant="dark">
            View Owner {appointment.ownerDisplayName}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
