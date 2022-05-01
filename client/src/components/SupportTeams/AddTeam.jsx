import React from 'react'
import MyForm from "./MyForm";
import SupTeamsService from "../../services/SupTeams.service";
import MapToDb from "./MapToDb";

function AddTeam() {

    const array = [
        {
            id: 'title',
            label: 'Otsikko'
        },
        {
            id: 'support_group',
            label: 'Tukiryhmä'
        },
        {
            id: 'service_provider',
            label: 'Palvelutarjooma'
        },
        {
            id: 'description',
            label: 'Kuvaus'
        }
    ]

    const handleSubmit = (items) => {
        // Add -> db
        SupTeamsService.create(MapToDb(items)).then(res => {
            console.log('create res.data: ', res.data)
            console.log('Created new support team successfully')
        }).catch(e => {
            console.log('e: ', e)
        })

    }

    return (
        <div>
            <div>
                <h4>Lisää Tukitiimi</h4>
                <MyForm array={array} handleSubmit={handleSubmit} />
            </div>
        </div>
    )
}

export default AddTeam