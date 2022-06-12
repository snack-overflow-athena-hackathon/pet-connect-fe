import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { PetList } from "./components/ PetList";
import { Routes, Route } from "react-router-dom";
import { SinglePet } from "./components/SinglePet";
import { SingleUser } from "./components/SingleUser";
import { PetConnect } from "./components/PetConnect";
import { SnackOverflow } from "./components/SnackOverflow";
// import { UserContext } from './context/UserContext';
// import { useContext } from 'react';

function App() {
  // const {user} = useContext(UserContext)

  return (
    <>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<PetList />} />
          <Route path="/pets/:id" element={<SinglePet />} />
          <Route path="/users/:id" element={<SingleUser />} />
          <Route path="/petconnect" element={<PetConnect />} />
          <Route path="/snackoverflow" element={<SnackOverflow />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
