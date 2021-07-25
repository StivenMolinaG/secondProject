import React, { Component } from 'react'
import './Pokemon.css'
import PeopleCard from '../../components/PeopleCard';
const POKEMON_URL = 'https://pokeapi.co/api/v2/';

class Pokemon extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemon: []
        }
    }
    componentDidMount() {
        const endpoint = POKEMON_URL + 'pokemon/?offset=0&limit=10';
        fetch(endpoint)
            .then(res => res.json())
            .then(data => {
                console.log('@data: ', data)
                const results = data && data.results || [];
                console.log('@results: ', results);
                this.setState({ pokemon: results });
            });
    }

    render(){
        return (
            <div>
                <div className="title">
                    <p>Pokemon</p>
                </div>
                <section className="app__people">
                    {
                        this.state.pokemon.map((p, index) => {
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

export default Pokemon;
