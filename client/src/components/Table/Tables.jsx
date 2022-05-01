import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import './table.css'


class Tables extends Component {
    render() {
        return (
            <Table striped hover variant="dark" size="sm">
                <thead>
                    <tr>
                        <th>Nimi</th>
                        <th>Sähköposti</th>
                        <th>Puhelinnumero</th>
                        <th>Toimiala</th>
                        <th>Lisätietoja</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Etunimi Sukunimi</td>
                        <td>etunimi.sukunimi@email.com</td>
                        <td>0404323411</td>
                        <td>Kasvatus ja Oppiminen</td>
                        <td>Vilkas mielikuvitus</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default Tables