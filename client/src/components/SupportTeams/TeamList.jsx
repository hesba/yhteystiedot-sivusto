import React, { useEffect, useState } from 'react'
// import { Table } from 'rsuite'
// import { Cell } from 'rsuite-table';
// import { HeaderCell } from 'rsuite-table';
// import { Column } from 'rsuite-table';
import SupTeamsService from '../../services/SupTeams.service';
import MyForm from './MyForm';
// import 'rsuite/dist/rsuite.min.css'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TeamList() {

    const [tableData, setTableData] = useState("")

    useEffect(() => {
        SupTeamsService.getAll().then(res => {
            console.log('res.data: ', res.data)
            setTableData(res.data)
        }).catch(e => {
            console.log('e: ', e)
        })

    }, [])

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Otsikko</th>
                        <th>Tukiryhmä</th>
                        <th>Palvelutarjooma</th>
                        <th>Kuvaus</th>
                        <th>Toiminto</th>
                    </tr>
                </thead>
                {tableData && tableData.map((supteams) => {
                    return (
                        <tbody>
                            <td>{supteams.title}</td>
                            <td>{supteams.support_group}</td>
                            <td>{supteams.service_provider}</td>
                            <td>{supteams.description}</td>
                            <td>
                                <Link to={"/supteams/" + supteams._id}> Muokkaa </Link>
                            </td>
                        </tbody>
                    )
                })}
            </Table>
        </div>
    )

}

export default TeamList