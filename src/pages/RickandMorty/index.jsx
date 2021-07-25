import React, { Component } from 'react'
import './RickandMorty.css'
import PeopleCard from '../../components/PeopleCard';
const URL_RICKANDMORTY = 'https://rickandmortyapi.com/api/';

class RickandMorty extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rickandmorty: []
        }
    }
    componentDidMount() {
        const endpoint = URL_RICKANDMORTY + 'character/';
        fetch(endpoint)
            .then(res => res.json())
            .then(data => {
                console.log('@data: ', data)
                const results = data && data.results || [];
                console.log('@results: ', results);
                this.setState({ rickandmorty: results });
            });
    }

    render(){
        return (
            <div>
                <div className="title">
                    <p>RickAndMorty</p>
                </div>
                <section className="app__people">
                    {
                        this.state.rickandmorty.map((p, index) => {
                            if(index < 10){
                                return (
                                    <PeopleCard name={p.name}
                                        birth_year={p.birth_year}
                                        gender={p.gender}
                                        key={index} />
                                );
                            }
                        })
                    }
                </section>
            </div>
        )
    }
}

export default RickandMorty;
