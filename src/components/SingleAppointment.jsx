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
        <Card.Body style={{ backgroundColor: "#607744" }}>
          <Card.Title style={{ backgroundColor: "#607744" }}>
            Date and Time {appointment.appointmentDateTimeUTC}
          </Card.Title>
          <Card.Text style={{ backgroundColor: "#607744" }}>
            Owner {appointment.ownerId}
          </Card.Text>
          <Card.Text style={{ backgroundColor: "#607744" }}>
            Visitor {appointment.visitorId}
          </Card.Text>
          <Card.Text style={{ backgroundColor: "#607744" }}>
            Pet {appointment.petId}
          </Card.Text>
          <Card.Text style={{ backgroundColor: "#607744" }}>
            Location {appointment.locationId}
          </Card.Text>
          <Card.Text style={{ backgroundColor: "#607744" }}>
            State {appointment.appointmentState}
          </Card.Text>
          <Link to={`/users/${appointment.visitorId}`}>
            <Button style={{ margin: "5px" }} variant="dark">
              View Visitor {appointment.visitorId}
            </Button>
          </Link>
          <Link to={`/users/${appointment.ownerId}`}>
            <Button style={{ margin: "5px" }} variant="dark">
              View Owner {appointment.ownerId}
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};
