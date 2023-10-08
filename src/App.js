import Header from "./Header";
import React from "react";
import PostControl from "./PostControl";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";


function App() {

  return (
    <React.Fragment>
      <Container>
        <br/>
      <Header/>
      <hr/>
      <PostControl/>
      </Container>
    </React.Fragment>
  );
}

export default App;
