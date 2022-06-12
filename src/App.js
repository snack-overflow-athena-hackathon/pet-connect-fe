import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { PetList } from "./components/ PetList";
import { AppointmentList } from "./components/AppointmentList";
import { Routes, Route } from "react-router-dom";
import { SinglePet } from "./components/SinglePet";
import { SingleUser } from "./components/SingleUser";
import { SingleAppointment } from "./components/SingleAppointment";
import { PetConnect } from "./components/PetConnect";
import { SnackOverflow } from "./components/SnackOverflow";
import { Resources } from "./components/Resources";
import { Users } from "./components/Users";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

function App() {
  const { setIsLoggedIn } = useContext(UserContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setIsLoggedIn(foundUser);
    }
  }, []);

  return (
    <>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<PetList />} />
          <Route path="/appointments" element={<AppointmentList />} />
          <Route path="/pets/:id" element={<SinglePet />} />
          <Route path="/users/:id" element={<SingleUser />} />
          <Route path="/appointments/:id" element={<SingleAppointment />} />
          <Route path="/petconnect" element={<PetConnect />} />
          <Route path="/snackoverflow" element={<SnackOverflow />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/login" element={<Users />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
