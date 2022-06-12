import logo from "../images/petconnect.png";
import { Link } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

export const NavBar = () => {
  const { isLoggedIn } = useContext(UserContext);
  return (
    <>
      <header className="App-header">
        <Link to="/">
          <img
            className="App-logo"
            src={logo}
            alt="Pet Connect logo. A cat and a canary hug each other over the text 'bringing people and pets together'"
          />
        </Link>
      </header>

      <Nav style={{margin: "15px"}} variant="pills" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <NavDropdown title="My Profile" id="nav-dropdown">
        { !isLoggedIn ? <NavDropdown.Item eventKey="4.0">Sign In</NavDropdown.Item> : <></>}
          <NavDropdown.Item eventKey="4.1">My Profile</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">My Pets</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">My Appointments</NavDropdown.Item>
          { isLoggedIn ? <NavDropdown.Item eventKey="4.4">Log Out</NavDropdown.Item> : <><NavDropdown.Divider /> <NavDropdown.Item eventKey="4.5">New User</NavDropdown.Item></>}
        </NavDropdown>
        <NavDropdown title="About" id="nav-dropdown">
          <NavDropdown.Item href="/petconnect" eventKey="5.1">
            PetConnect
          </NavDropdown.Item>
          <NavDropdown.Item href="/snackoverflow" eventKey="5.2">
            SnackOverflow
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item
            eventKey="5.3"
            href="https://beamery.com/"
            target="_blank"
          >
            Beamery
          </NavDropdown.Item>
          <NavDropdown.Item
            eventKey="5.4"
            href="https://www.showcode.io/athena-hack-2022/"
            target="_blank"
          >
            ShowCode's Athena Hackathon
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="5.5">Other Resources</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </>
  );
};
