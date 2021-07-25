import React, { Component } from 'react'
import '../Pokemon/pokemon.css'
import PeopleCard from '../PeopleCard';

class pokemon extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render(){
        return (
            <div>
                <div className="title">
                    <p>Pokemon</p>
                </div>
                <section className="app__pokemon">
                    {
                        this.props.pokemon.map((p, index) => {
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
