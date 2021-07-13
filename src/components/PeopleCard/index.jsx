import React, { Component } from 'react'
import './PeopleCard.css'

class PeopleCard extends Component {
    render() {
        return (
            <div className="peopleCard">
                <div>
                    <p className="paragraph">Name: {this.props.name}</p>
                    <p className="paragraph">Gender: {this.props.gender}</p>
                    <p className="paragraph">Birth Year: {this.props.birth_year}</p>
                </div>
            </div>
        );
    }
}

export default PeopleCard
