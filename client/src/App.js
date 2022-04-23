
//import 'bootstrap/dist/css/bootstrap.min.css'
 
// We use Route in order to define the different routes of our application
//import { Route, Routes } from "react-router-dom";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddContactp from "./pages/AddContactp";
import AddContactc from "./pages/AddContactsc";
import ErrorPage from "./pages/ErrorPage";
import NavBar from './components/Navbar/NavBar';
// We import all the components we need in our app

 
const App = () => {
 return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/addcc" element={<AddContactc />} />
        <Route path="/addcp" element={<AddContactp />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
 )
}
 
export default App;