import React from "react";
import MyForm from "./MyForm";
import SupTeamsService from "../../services/SupTeams.service";
import MapToDb from "./MapToDb";

function EditTeam({ id }) {

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
    const handleUpdate = (items) => {
        // Updating to db
        SupTeamsService.update(id, MapToDb(items)).then(res => {
            console.log(res.data)
            console.log('Updated to db successfully.')
        }).catch(e => {
            console.log('e: ', e)
        })
    }

    const handleDelete = () => {
        // Deleting from db
        SupTeamsService.delete(id).then(res => {
            console.log(res.data)
            console.log('Deleted from db successfully')
        }).catch(e => {
            console.log('e: ', e)
        })
    }

    return (
        <div>
            <div>
                <h4>Tukitiimit2</h4>
                <MyForm array={array} handleSubmit={handleUpdate} />
                <button
                    type="button"
                    onClick={handleDelete}
                >
                    Poista
                </button>
            </div>
        </div>
    )

}

export default EditTeam