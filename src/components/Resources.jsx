import { Card, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import support from "../images/support.png";

export const Resources = () => {
  return (
    <div className="about-container">
      <Card>
        <Card.Img
          variant="top"
          src={support}
          style={{
            borderBottom: "1px solid white",
            backgroundColor: "#a39594",
          }}
        />
        <Card.Body style={{ backgroundColor: "#607744" }}>
          <Card.Title style={{ backgroundColor: "#607744" }}>
            Other Resources for Displaced People
          </Card.Title>
          <Button
            href="https://www.redcross.org.uk/about-us/what-we-do/how-we-support-refugees"
            variant="dark"
            size="lg"
          >
            The British Red Cross
          </Button>
          <Card.Text
            style={{ backgroundColor: "#607744", textAlign: "justify" }}
          >
            The British Red Cross provide services for refugees, asylum seekers,
            vulnerable migrants and survivers of trafficking.
          </Card.Text>
          <Card.Text
            style={{ backgroundColor: "#607744", textAlign: "justify" }}
          >
            This includes help with essentials such as food, cash and
            toiletries, settling into the country and getting medical and dental
            care.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
