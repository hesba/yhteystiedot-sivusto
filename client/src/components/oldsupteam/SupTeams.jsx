import React, { Component } from "react";
import SupTeamsService from "../../services/SupTeams.service";
//import MyFormGroup from "../Form/MyFormGroup";
import MyForm from "../SupportTeams/MyForm";


class SupTeams extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.getSupTeam = this.getSupTeam.bind(this);
        this.updatePublished = this.updatePublished.bind(this);
        this.updateSupTeam = this.updateSupTeam.bind(this);
        this.deleteSupTeam = this.deleteSupTeam.bind(this);

        this.state = {
            currentSupTeam: {
                _id: null,
                title: "",
                support_group: "",
                service_provider: "",
                description: "",
                published: false
            },
            message: ""
        };
    }

    componentDidMount() {
        this.getSupTeam(this.props.id);
    }

    onChangeTitle(e) {
        const title = e.target.value;

        this.setState(function (prevState) {
            return {
                currentTutorial: {
                    ...prevState.currentTutorial,
                    title: title
                }
            };
        });
    }

    onChangeDescription(e) {
        const description = e.target.value;

        this.setState(prevState => ({
            currentSupTeam: {
                ...prevState.currentTutorial,
                description: description
            }
        }));
    }

    getSupTeam(id) {
        SupTeamsService.get(id)
            .then(response => {
                this.setState({
                    currentSupTeam: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    updatePublished(status) {
        var data = {
            _id: this.state.currentSupTeam._id,
            title: this.state.currentSupTeam.title,
            support_group: this.state.currentSupTeam.support_group,
            service_provider: this.state.currentSupTeam.service_provider,
            description: this.state.currentSupTeam.description,
            published: status
        };

        SupTeamsService.update(this.state.currentSupTeam._id, data)
            .then(response => {
                this.setState(prevState => ({
                    currentSupTeam: {
                        ...prevState.currentSupTeam,
                        published: status
                    }
                }));
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    updateSupTeam() {
        SupTeamsService.update(
            this.state.currentSupTeam._id,
            this.state.currentSupTeam
        )
            .then(response => {
                console.log(response.data);
                this.setState({
                    message: "The supteam was updated successfully!"
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    deleteSupTeam() {
        SupTeamsService.delete(this.state.currentSupTeam._id)
            .then(response => {
                console.log(response.data);
                this.props.history.push('/supteams')
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {

        const currentSupTeam = this.state;
        const array = [
            {
                id: 'title',
                label: 'Otsikko'
            },
            {
                id: 'support_group',
                label: 'Tukiryhmä'
            }
        ]
        const handleSubmit = (items) => {
            console.log('items: ', items)
        }
        return (
            <div>
                {currentSupTeam ? (
                    <div className="edit-form">
                        <h4>Tukitiimit</h4>
                        <form>
                            <MyForm array={array} handleSubmit={handleSubmit} />
                        </form>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Please click on a SupTeam...</p>
                    </div>
                )}
            </div>
        );
    }
}

export default SupTeams