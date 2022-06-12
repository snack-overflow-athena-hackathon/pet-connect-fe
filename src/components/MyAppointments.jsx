import { useState, useEffect } from "react";
import { getAppointmentsByUserId } from "../utils/api";
import { AppointmentCard } from "./AppointmentCard";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const MyAppointments = () => {
  const [allAppointments, setAllAppointments] = useState([]);
  const { isLoggedIn } = useContext(UserContext)
  console.log(isLoggedIn)

  useEffect(() => {
    if (isLoggedIn) {
      getAppointmentsByUserId(isLoggedIn).then((petsFromAPI) => {
        setAllAppointments(petsFromAPI);
      });
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <div style={{display: "inline-block"}}>
      <Link
      to="/login" style={{color: "#607744"}}>Sign in</Link> to access your appointments!
      </div>
    )
  }

  return (
    <ul className="AppointmentList">
      {allAppointments.map((appointment, index) => {
        return (
          <AppointmentCard
            appointmentDateTimeUTC={appointment.appointmentDateTimeUTC}
            ownerId={appointment.ownerId}
            ownerDisplayName={appointment.ownerDisplayName}
            visitorId={appointment.visitorId}
            visitorDisplayName={appointment.visitorDisplayName}
            petId={appointment.petId}
            petName={appointment.petName}
            id={appointment.id}
            key={index}
          />
        );
      })}
    </ul>
  );
};
