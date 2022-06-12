import { useState, useEffect } from "react";
import { getAllAppointments } from "../utils/api";
import { AppointmentCard } from "./AppointmentCard";

export const AppointmentList = () => {
  const [allAppointments, setAllAppointments] = useState([]);

  useEffect(() => {
    getAllAppointments().then((petsFromAPI) => {
      setAllAppointments(petsFromAPI);
    });
  }, []);

  return (
    <ul className="AppointmentList">
      {allAppointments.map((appointment, index) => {
        return (
          <AppointmentCard
            appointmentDateTimeUTC={appointment.appointmentDateTimeUTC}
            ownerId={appointment.ownerId}
            visitorId={appointment.visitorId}
            petId={appointment.petId}
            id={appointment.id}
            key={index}
          />
        );
      })}
    </ul>
  );
};
