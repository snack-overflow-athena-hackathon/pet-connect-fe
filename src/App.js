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

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<PetList />} />
          <Route path="/appointments/" element={<AppointmentList />} />
          <Route path="/pets/:id" element={<SinglePet />} />
          <Route path="/users/:id" element={<SingleUser />} />
          <Route path="/appointments/:id" element={<SingleAppointment />} />
          <Route path="/petconnect" element={<PetConnect />} />
          <Route path="/snackoverflow" element={<SnackOverflow />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
