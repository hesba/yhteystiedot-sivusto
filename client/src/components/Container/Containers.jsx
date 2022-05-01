import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Tables from '../Table/Tables'
import Texts from '../Texts'
import './container.css'


class Containers extends Component {
    render() {
        return (
            <div class="container mt-4 p-5 text-white rounded thisCont">
                <Container>
                    <Row>
                        <Col>
                            <Texts />
                        </Col>
                        <Col>
                            <Tables />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Containers