import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { ChatCard } from "./components";

function App() {
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-md-center">
          <Col lg="6">
            <ChatCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
