import React, { Component }  from 'react'
import './App.css'
import Swapi from '../Swapi'
import Pokemon from '../Pokemon'
import RickandMorty from '../RickandMorty'

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="Header">
                <p>My Second Project</p>
                </div>
                <Swapi />
                <Pokemon />
                <RickandMorty />
            </div>
        )
    }
}

export default App;
