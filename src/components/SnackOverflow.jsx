import { Card, CarouselItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import piggies from "../images/bonnie-kittle.jpg";
import pupper from "../images/karsten-winegeart.jpg";

export const SnackOverflow = () => {
  return (
    <div className="about-container">
      <Card>
        <Card.Img
          variant="top"
          src={piggies}
          style={{ borderBottom: "1px solid white" }}
        />
        <Card.Body style={{ backgroundColor: "#607744" }}>
          <Card.Text
            style={{ backgroundColor: "#607744", textAlign: "justify" }}
          >
            <Card.Title style={{ backgroundColor: "#607744" }}>
              About Snack Overflow
            </Card.Title>
            We created this app for the{" "}
            <Link
              style={{
                backgroundColor: "#607744",
                color: "#fff",
              }}
              to="https://www.showcode.io/athena-hack-2022/"
            >
              Athena Hackathon 2022
            </Link>
            , specifically the{" "}
            <Link
              style={{
                backgroundColor: "#607744",
                color: "#fff",
              }}
              to="https://beamery.com/"
            >
              Beamery
            </Link>{" "}
            theme, to build something that could play a part in helping
            displaced people or refugees across the world get access to new
            skills, work and other opportunities.{" "}
          </Card.Text>
          <Card.Text
            style={{ backgroundColor: "#607744", textAlign: "justify" }}
          >
            <Card.Title
              style={{
                backgroundColor: "#607744",
                color: "#fff",
                textAlign: "center",
              }}
            >
              Athena Hack
            </Card.Title>
            The Athena Hackathon by{" "}
            <Link
              style={{
                backgroundColor: "#607744",
                color: "#fff",
              }}
              to="https://www.showcode.io/"
            >
              Showcode
            </Link>{" "}
            is a virtual hackathon helping shine the spotlight on some amazing
            women and non-binary people working in tech. Showcode is a
            professional network for all tech communities to share, learn and
            compete so you can get hired.
          </Card.Text>
          <Card.Text
            style={{
              backgroundColor: "#607744",
              color: "#fff",
              textAlign: "justify",
            }}
          >
            <Card.Title
              style={{
                backgroundColor: "#607744",
                color: "#fff",
              }}
            >
              Beamery
            </Card.Title>
            Beamery was founded on the premise that regardless of where you
            live, your background, pedigree, race, or religion, that everyone
            should have the same access to work, and that companies needed to
            fundamentally transform their hiring process.
          </Card.Text>
          <Card.Text
            style={{
              backgroundColor: "#607744",
              color: "#fff",
              textAlign: "justify",
            }}
          >
            We at Snack Overflow believe in, and agree with, their premise and
            goals and are excited to have had this opportunity to create
            something that aligns with them.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={pupper} />
      </Card>
    </div>
  );
};
