import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import Containers from "../components/Container/Containers"
import Jumbo from '../components/Jumbo/Jumbo'

function Home () {
  return (
    <Container>
      <Jumbo />
      <Containers />
    </Container>
  )
 }
  
 export default Home