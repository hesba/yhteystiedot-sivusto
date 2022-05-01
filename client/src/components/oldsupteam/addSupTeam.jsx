import React, { Component } from "react";
import SupTeamsService from "../../services/SupTeams.service";

export default class AddSupTeam extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeSupGroup = this.onChangeSupGroup.bind(this);
        this.onChangeServiceProv = this.onChangeServiceProv.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.saveSupTeam = this.saveSupTeam.bind(this);
        this.newSupTeam = this.newSupTeam.bind(this);

        this.state = {
            id: null,
            title: "",
            support_group: "",
            service_provider: "",
            description: "",
            published: false,

            submitted: false
        };
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeSupGroup(e) {
        this.setState({
            support_group: e.target.value
        })
    }

    onChangeServiceProv(e) {
        this.setState({
            service_provider: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    saveSupTeam() {
        var data = {
            title: this.state.title,
            description: this.state.description
        };

        SupTeamsService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    title: response.data.title,
                    support_group: response.data.support_group,
                    service_provider: response.data.service_provider,
                    description: response.data.description,
                    published: response.data.published,

                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    newSupTeam() {
        this.setState({
            id: null,
            title: "",
            support_group: "",
            service_provider: "",
            description: "",
            published: false,

            submitted: false
        });
    }

    render() {
        return (
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>You submitted successfully!</h4>
                        <button className="btn btn-success" onClick={this.newSupTeam}>
                            Add
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                required
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                                name="title"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="support_group">Tukitiimi</label>
                            <input
                                type="text"
                                className="form-control"
                                id="support_group"
                                required
                                value={this.state.support_group}
                                onChange={this.onChangeSupGroup}
                                name="support_group"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="service_provider">Palvelutarjooma</label>
                            <input
                                type="text"
                                className="form-control"
                                id="service_provider"
                                required
                                value={this.state.service_provider}
                                onChange={this.onChangeServiceProv}
                                name="service_provider"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                required
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                name="description"
                            />
                        </div>

                        <button onClick={this.saveSupTeam} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                )}
            </div>
        );
    }
}