import React, { Component } from 'react'
import './PeopleCard.css'

class PeopleCard extends Component {
    render() {
        const { name, birth_year, gender } = this.props;
        return (
            <div className="peopleCard">
                <div>
                    {name && <p className="paragraph">Name: {name}</p>}
                    {gender && <p className="paragraph">Gender: {gender}</p>}
                    {birth_year && <p className="paragraph">Birth Year: {birth_year}</p>}
                </div>
            </div>
        );
    }
}

export default PeopleCard
