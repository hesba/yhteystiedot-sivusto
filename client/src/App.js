import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
 
// We use Route in order to define the different routes of our application
//import { Route, Routes } from "react-router-dom";
import { Container } from 'react-bootstrap'
import NavBar from './components/NavBar'
import Papers from "./components/Papers";
// We import all the components we need in our app

 
const App = () => {
 return (
   <Container>
     <NavBar />
     <Papers />
   </Container>
 );
};
 
export default App;