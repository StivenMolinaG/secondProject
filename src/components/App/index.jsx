import React, { Component }  from 'react'
import './App.css'
import Swapi from '../Swapi'
import Pokemon from '../Pokemon'

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="Header">
                <p>My Second Project</p>
                </div>
                <Swapi />
                <Pokemon />
            </div>
        )
    }
}

export default App;
