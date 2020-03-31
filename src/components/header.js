import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import classes from '../styles/header.module.scss';


export default class header extends Component {
    render() {
        return (
            <Link to='/'>
                <header className={classes.header}>
                    <div><img src="guide-smiths.png" alt="Guide-Smiths logo"/></div>
                    <h1>Phone Catalogue</h1>
                    <div className={classes.icons}>
                        <a target="_blank" href="https://www.linkedin.com/in/sebastian-real/" rel="noopener noreferrer" >
                            <img src="linkedin.png" alt="Linkedin logo"/>
                        </a>
                        <a target="_blank" href="https://github.com/sebanob9" rel="noopener noreferrer" >
                            <img src="github.png" alt="Github logo"/>
                        </a>
                    </div>
                    
                </header>
            </Link>
        )
    }
}
