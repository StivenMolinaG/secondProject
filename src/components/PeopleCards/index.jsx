import React, { Component } from 'react'

class PeopleCard extends Component {
    render() {
        return (
            <div className="peopleCard">
                <span>Name: {this.props.name}</span>
                <span>Birth Year: {this.props.birth_year}</span>
                <span>Gender: {this.props.gender}</span>
            </div>
        );
    }
}

export default PeopleCard
