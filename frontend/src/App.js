import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { ChatCard } from "./components";
import ApolloProvider from "./services/ApolloProvider";

function App() {
  return (
    <div className="App">
      <ApolloProvider>
        <Container>
          <Row className="justify-content-md-center">
            <Col lg="6">
              <ChatCard />
            </Col>
          </Row>
        </Container>
      </ApolloProvider>
    </div>
  );
}

export default App;
