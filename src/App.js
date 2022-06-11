import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "./components/Nav";
import { PetList } from "./components/ PetList";
import { Routes, Route } from "react-router-dom";
import { SinglePet } from "./components/SinglePet";

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<PetList />} />
          <Route path="/pets/:id" element={<SinglePet />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
