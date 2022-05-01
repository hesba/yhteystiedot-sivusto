import React, { Component } from "react";
import SupTeamsService from "../../services/SupTeams.service";
import { Link } from "react-router-dom";

export default class SupTeamsList extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.retrieveSupTeams = this.retrieveSupTeams.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveSupTeam = this.setActiveSupTeam.bind(this);
        this.removeAllSupTeams = this.removeAllSupTeams.bind(this);
        this.searchTitle = this.searchTitle.bind(this);

        this.state = {
            supteams: [],
            currentSupTeam: null,
            currentIndex: -1,
            searchTitle: ""
        };
    }

    componentDidMount() {
        this.retrieveSupTeams();
    }

    onChangeSearchTitle(e) {
        const searchTitle = e.target.value;

        this.setState({
            searchTitle: searchTitle
        });
    }

    retrieveSupTeams() {
        SupTeamsService.getAll()
            .then(response => {
                this.setState({
                    supteams: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    refreshList() {
        this.retrieveSupTeams();
        this.setState({
            currentSupTeam: null,
            currentIndex: -1
        });
    }

    setActiveSupTeam(supteam, index) {
        this.setState({
            currentSupTeam: supteam,
            currentIndex: index
        });
    }

    removeAllSupTeams() {
        SupTeamsService.deleteAll()
            .then(response => {
                console.log(response.data);
                this.refreshList();
            })
            .catch(e => {
                console.log(e);
            });
    }

    searchTitle() {
        this.setState({
            currentSupTeam: null,
            currentIndex: -1
        });

        SupTeamsService.findByTitle(this.state.searchTitle)
            .then(response => {
                this.setState({
                    supteams: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const { searchTitle, supteams, currentSupTeam, currentIndex } = this.state;

        return (
            <div className="list row">
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by title"
                            value={searchTitle}
                            onChange={this.onChangeSearchTitle}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={this.searchTitle}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Tukitiimit -lista</h4>

                    <ul className="list-group">
                        {supteams &&
                            supteams.map((supteam, index) => (
                                <li
                                    className={
                                        "list-group-item " +
                                        (index === currentIndex ? "active" : "")
                                    }
                                    onClick={() => this.setActiveSupTeam(supteam, index)}
                                    key={index}
                                >
                                    {supteam.title}
                                </li>
                            ))}
                    </ul>

                    <button
                        className="m-3 btn btn-sm btn-danger"
                        onClick={this.removeAllSupTeams}
                    >
                        Remove All
                    </button>
                </div>
                <div className="col-md-6">
                    {currentSupTeam ? (
                        <div>
                            <h4>Tukiryhmä</h4>
                            <div>
                                <label>
                                    <strong>Title:</strong>
                                </label>{" "}
                                {currentSupTeam.title}
                            </div>
                            <div>
                                <label>
                                    <strong>Description:</strong>
                                </label>{" "}
                                {currentSupTeam.description}
                            </div>
                            <div>
                                <label>
                                    <strong>Status:</strong>
                                </label>{" "}
                                {currentSupTeam.published ? "Published" : "Pending"}
                            </div>

                            <Link
                                to={"/supteams/" + currentSupTeam._id}
                                className="badge badge-warning"
                            >
                                Edit
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <br />
                            <p>Please click on a SupTeam...</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}