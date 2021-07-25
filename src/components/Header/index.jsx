import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import HeaderOption from '../headerOption';
import headerOptions from './headerOptions.json';
import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeOption: 'home'
        }
    }
    onClick = (activeOption, pathOption) => {
        console.log("@Props_PathOption: ", pathOption);
        this.setState({ activeOption: activeOption });
        this.props.history.push(pathOption);
    }
    render(){
        return (
            <header className="header">
                <nav className="header__nav nav">
                    <ul className="nav__list list">
                        {
                            headerOptions.map((hopt, index) => {
                                console.log("@Path: ", hopt);
                                return (
                                    <HeaderOption activeOption={this.state.activeOption}
                                        onClick={this.onClick}
                                        optionText={hopt.optionText}
                                        option={hopt.option}
                                        path={hopt.path}
                                        key={index} />
                                );
                            })
                        }
                    </ul>
                </nav>
            </header>
        );
    }
}
export default withRouter(Header);