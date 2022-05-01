import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import EditTeam from '../components/SupportTeams/EditTeam'

const EditSupTeam = (props) => {
    let { id } = useParams()
    console.log(id)
    return (
        <div class="container mt-4 p-5 rounded thisCont">
            <Container>
                <EditTeam id={id} />
            </Container>
        </div>
    )
}

export default EditSupTeam
