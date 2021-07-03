import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
// import Course from './components/Course';
import Header from './components/Header';
import Menus from './components/Menus';
import Allcourses from './components/Allcourses';
import Addcourse from './components/Addcourse';
import Updatecourse from './components/Updatecourse';
import { Col, Container, Row } from 'reactstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  const notify = () => {

    toast.success("Done", { position: 'top-center' }

    );
  };

  return (

    <div>

      <Router>
        <ToastContainer />

        <Container>

          <Header />

          <Row>
            <Col md={4}>

              <Menus />

            </Col>

            <Col md={8}>

              <Route path="/" component = {Home}  exact />
              <Route path="/add-course" component = {Addcourse}  exact />
              <Route path="/update-course" component = {Updatecourse}  exact />
              <Route path="/view-courses" component = {Allcourses}  exact />
            
            </Col>

          </Row>

        </Container>



      </Router>



    </div>
  );
}

export default App;
