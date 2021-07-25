import React, { Component } from 'react'
import './Swapi.css'
import PeopleCard from '../PeopleCard';

class Swapi extends Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }

    render(){
        return (
            <div>
                <div className="title">
                    <p>Swapi</p>
                </div>
                <section className="app__people">
                    {
                        this.props.people.map((p, index) => {
                            return (
                                <PeopleCard name={p.name}
                                    birth_year={p.birth_year}
                                    gender={p.gender}
                                    key={index} />
                            );
                        })
                    }
                </section>
            </div>
        )
    }
}

export default Swapi;
