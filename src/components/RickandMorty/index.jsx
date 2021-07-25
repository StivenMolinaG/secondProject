import React, { Component } from 'react'
import './rickandmorty.css'
import '../PeopleCard/PeopleCard.css'
import PeopleCard from '../PeopleCard';

class rickandmorty extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
    }

    render(){
        return (
            <div>
                <div className="title">
                    <p>Rick and Morty</p>
                </div>
                <section className="app__rickandmorty">
                    {
                        this.props.rickAndMorty.map((p, index) => {
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