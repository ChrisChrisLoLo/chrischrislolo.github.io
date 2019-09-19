import React from 'react';
import './App.scss';
// import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter, Switch, Route} from "react-router-dom";
import { Container } from "reactstrap";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <HashRouter>
          <Navbar/>
        <Container fluid={true} className={"app-body"}>
          <Switch>
            <Route exact path={"/"} component={HomePage}/>
          </Switch>
        </Container>
      </HashRouter>
    </div>
  );
}

export default App;
