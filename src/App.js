import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TodosList from './components/todos-list.component';
import EditTodo from './components/edit-todo.component';
import CreateTodo from './components/create-todo.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand>
                  <Link to={"/create-student"} className="nav-link">
                    React MERN Stack App
                    </Link>
                </Navbar.Brand>
                <Nav className="justify-content-end">
                  <Nav>
                    <Link to={"/create-student"} className="nav-link">
                      Create Student
                    </Link>
                  </Nav>
                  {/*<Nav>
                    <Link to={"/edit-student/:id"} className="nav-link">
                      Edit Student
                    </Link>
                  </Nav>*/}
                  <Nav>
                    <Link to={"/student-list"} className="nav-link">
                      Student List
                    </Link>
                  </Nav>
                </Nav>
              </Container>
            </Navbar>
          </header>
          <Container>
            <Row>
              <Col md={12}>
                <div className="wrapper">
                  <Switch>
                    <Route exact path="/" component={CreateTodo}/>
                    <Route path="/create-student" component={CreateTodo}/>
                    <Route path="/edit-student/:id" component={EditTodo}/>
                    <Route path="/student-list" component={TodosList}/>
                  </Switch>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;