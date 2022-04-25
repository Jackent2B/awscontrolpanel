import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            AWS Control Panel
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <NavDropdown title="EC2" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/createinstance">
                  Create Instance
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/listinstance">
                  Show Instances
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/startinstance">
                  Start Instance
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/stopinstance">
                  Stop Instance
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/terminateinstance">
                  Terminate Instance
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="S3" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/createbucket">
                  Create Bucket
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/listbucket">
                  Show Buckets
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deletebucket">
                  Delete Bucket
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="IAM" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/createuser">
                  Create User
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/listuser">
                  Show Users
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
