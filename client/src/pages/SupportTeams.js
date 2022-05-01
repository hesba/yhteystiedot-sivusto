import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import AddTeam from '../components/SupportTeams/AddTeam'
import { TeamList } from '../components/SupportTeams'
import { useParams } from 'react-router-dom'

function SupportTeams() {
    let { id } = useParams()
    return (
        <div class="container mt-4 p-5 text-white rounded thisCont">
            <Container>
                <AddTeam />
            </Container>
            <Container>
                <TeamList />
            </Container>
        </div>
    )
}

export default SupportTeams
