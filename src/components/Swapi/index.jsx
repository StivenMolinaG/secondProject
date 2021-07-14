import React, { Component } from 'react'
import './Swapi.css'
import PeopleCard from '../PeopleCard';
const SWAPI_URL = 'https://swapi.dev/api/';

class Swapi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: []
        }
    }

    componentDidMount() {
        const endpoint = SWAPI_URL + 'people/';
        fetch(endpoint)
            .then(res => res.json())
            .then(data => {
                console.log('@data: ', data)
                const results = data && data.results || [];
                console.log('@results: ', results);
                this.setState({ people: results });
            });
    }

    render(){
        return (
            <div>
                <div className="title">
                    <p>Swapi</p>
                </div>
                <section className="app__people">
                    {
                        this.state.people.map((p, index) => {
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
