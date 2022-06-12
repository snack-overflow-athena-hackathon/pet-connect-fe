import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
            Owner {appointment.ownerDisplayName}
          </Card.Text>
          <Card.Text style={{ backgroundColor: "#607744" }}>
            Visitor {appointment.visitorDisplayName}
          </Card.Text>
          <Card.Text style={{ backgroundColor: "#607744" }}>
            Pet {appointment.petName}
          </Card.Text>
          <Card.Text style={{ backgroundColor: "#607744" }}>
            Location {appointment.locationId}
          </Card.Text>
          <Card.Text style={{ backgroundColor: "#607744" }}>
            State {appointment.appointmentState}
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
