import React, { Component }  from 'react'
import './App.css'
import Swapi from '../Swapi'

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="container Header">
                <p>My Second Project HOLA</p>
                </div>
                <Swapi />
            </div>
        )
    }
}

export default App;
