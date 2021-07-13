import React, { Component } from 'react'
import '../Pokemon/pokemon.css'
import PeopleCard from '../PeopleCard';
const POKEMON_URL = 'https://pokeapi.co/api/v2/';

class pokemon extends Component{
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
                console.log('@results pokemon: ', results);
                this.setState({ pokemon: results });
            });
    }

    render(){
        return (
            <div>
                <div className="title bgr__pokemon">
                    <p>Pokemon</p>
                </div>
                <section className="app__pokemon">
                    {
                        this.state.pokemon.map((p, index) => {
                            return (
                                <PeopleCard name={p.name}
                                    key={index} />
                            );
                        })
                    }
                </section>
            </div>
        )
    }
}

export default pokemon
