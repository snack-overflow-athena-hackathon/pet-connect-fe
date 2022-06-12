import { Card } from "react-bootstrap";
import bunny from "../images/gavin-allanwood.jpg";
import friends from "../images/tran-mau-tri-tam.jpg";

export const PetConnect = () => {
  return (
    <div className="about-container">
      <Card>
        <Card.Img
          variant="top"
          src={bunny}
          style={{ borderBottom: "1px solid white" }}
        />
        <Card.Body style={{ backgroundColor: "#607744" }}>
          <Card.Text
            style={{ backgroundColor: "#607744", textAlign: "justify" }}
          >
            <Card.Title style={{ backgroundColor: "#607744" }}>Pets</Card.Title>
            Pets give us companionship, love, and emotional connection. Pets
            aren’t just animals - they’re an important part of our family. Here
            at Snack Overflow we believe in those connections between people and
            pets, and people and people.
          </Card.Text>
          <Card.Text
            style={{ backgroundColor: "#607744", textAlign: "justify" }}
          >
            <Card.Title style={{ backgroundColor: "#607744" }}>
              Loved Ones Left Behind
            </Card.Title>
            A too often overlooked issue when displaced people are moved from
            one country to another are the family, including pets, that they
            leave behind, and the time taken to be reunited.
          </Card.Text>
          <Card.Text
            style={{ backgroundColor: "#607744", textAlign: "justify" }}
          >
            Our intention with PetConnect is to connect pet families with
            displaced people to help ease the pain of missing a loved one. Pet
            families can upload a bio of themselves and their pet with a
            location, and displaced people can contact and connect with those
            pet families closest to them for a pet date.
          </Card.Text>
          <Card.Text
            style={{ backgroundColor: "#607744", textAlign: "justify" }}
          >
            A pet date can be a walk in the park, a meetup at a coffee shop, or
            mucking out a stable and going for a ride.
          </Card.Text>
          <Card.Text
            style={{ backgroundColor: "#607744", textAlign: "justify" }}
          >
            <Card.Title style={{ backgroundColor: "#607744" }}>
              Our Mission
            </Card.Title>
            We wish to connect all sorts of pets to all sorts of people, helping
            to forge those emotional connections not just between people and
            pets, but between people and people.
          </Card.Text>
          <Card.Text
            style={{ backgroundColor: "#607744", textAlign: "justify" }}
          >
            A huge issue faced by displaced people is the loneliness that comes
            from moving to a new country, and hopefully bonding over pets can
            help alleviate some of the loneliness and help create a kinder, more
            caring, and more connected community.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={friends} />
      </Card>
    </div>
  );
};
