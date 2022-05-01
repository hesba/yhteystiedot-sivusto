//import 'bootstrap/dist/css/bootstrap.min.css'

// We use Route in order to define the different routes of our application
//import { Route, Routes } from "react-router-dom";
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {
    ErrorPage,
    AddContactp,
    AddContactc,
    EditSupTeam,
    Home,
    SupportTeams,
} from './pages'
import NavBar from './components/Navbar/NavBar'

import { AddTeam, TeamList } from './components/SupportTeams'
// We import all the components we need in our app

const App = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/supteamslist" element={<TeamList />} />
                <Route path="/addsupteams" element={<AddTeam />} />
                <Route path="/supteams/:id" element={<EditSupTeam />} />
                <Route path="/supportteams" element={<SupportTeams />} />
                <Route path="/addcc" element={<AddContactc />} />
                <Route path="/addcp" element={<AddContactp />} />
                <Route
                    path="*"
                    element={
                        <ErrorPage
                            text={'ERROR'}
                            description={'There is no such page'}
                        />
                    }
                />
            </Routes>
        </div>
    )
}

export default App
