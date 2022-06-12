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
            ownerDisplayName={appointment.ownerDisplayName}
            visitorDisplayName={appointment.visitorDisplayName}
            petName={appointment.petName}
            id={appointment.id}
            key={index}
          />
        );
      })}
    </ul>
  );
};
