import React, { Component } from 'react'
import './rickandmorty.css'
import '../PeopleCard/PeopleCard.css'
import PeopleCard from '../PeopleCard';
const rickandmorty_URL = 'https://rickandmortyapi.com/api';

class rickandmorty extends Component {
    constructor(props){
        super(props);
        this.state = {
            rickandmorty: []
        }
    }

    componentDidMount() {
        const endpoint = rickandmorty_URL + '/character';
        fetch(endpoint)
            .then(res => res.json())
            .then(data => {
                console.log('@data: ', data)
                const results = data && data.results || [];
                console.log('@results rickandmorty: ', results);
                this.setState({ rickandmorty: results });
            });
    }

    render(){
        return (
            <div>
                <div className="title bgr__rickandmorty">
                    <p>Rick and Morty</p>
                </div>
                <section className="app__rickandmorty">
                    {
                        this.state.rickandmorty.map((p, index) => {
                            if (p.id < 11){
                                return (
                                    <PeopleCard name={p.name}
                                            gender={p.gender}
                                        key={index} />
                                )
                            };
                        })
                    }
                </section>
            </div>
        )
    }
}

export default rickandmorty