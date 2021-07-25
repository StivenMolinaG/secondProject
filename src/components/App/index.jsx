import React, { Component }  from 'react';
import './App.css';
import Swapi from '../Swapi';
import Pokemon from '../Pokemon';
import RickandMorty from '../RickandMorty';

const SWAPI_URL = 'https://swapi.dev/api/';
const POKEMON_URL = 'https://pokeapi.co/api/v2/';
const URL_RICKANDMORTY = 'https://rickandmortyapi.com/api/';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            people: [],
            pokemon: [],
            rickAndMorty: []
        }
    }
    endpointSwapiPromise = () => {
        const endpointSwapi = SWAPI_URL + 'people/';
        return fetch(endpointSwapi)
            .then(res => res.json())
    }
    endpointPokemonPromise = () => {
        const endpointPokemon = POKEMON_URL + 'pokemon/?offset=0&limit=10';
        return fetch(endpointPokemon)
            .then(res => res.json())
    }
    endpointRickyPromise = () => {
        const endpointRicky = URL_RICKANDMORTY + 'character/';
        return fetch(endpointRicky)
            .then(res => res.json())
    }
    async allPromise() {
        try{
            const [peopleData, pokemonData, rickyData] = await Promise.all([this.endpointSwapiPromise(), this.endpointPokemonPromise(), this.endpointRickyPromise()]);
            this.setState({ people: peopleData.results, pokemon: pokemonData.results, rickAndMorty: rickyData.results })
        }catch(error){
            this.setState({ people: [], pokemon: [], rickAndMorty: [] })
            console.log('@error: ', error)
        }
    }
    componentDidMount() {
        this.allPromise();
    }
    render() {
        return (
            <div className="container">
                <div className="Header">
                <p>My Second Project</p>
                </div>
                <Swapi people={this.state.people}/>
                <Pokemon pokemon={this.state.pokemon}/>
                <RickandMorty rickAndMorty={this.state.rickAndMorty}/>
            </div>
        );
    }
}

export default App;
