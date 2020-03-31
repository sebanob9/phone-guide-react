import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import classes from '../styles/header.module.scss';


export default class header extends Component {
    render() {
        return (
            <Link to='/'>
                <header className={classes.header}>
                    <div><img src="guide-smiths.png"/></div>
                    <h1>Phone Catalogue</h1>
                    <div className={classes.icons}>
                        <a target="_blank" href="https://www.linkedin.com/in/sebastian-real/" rel="noopener" >
                            <img src="linkedin.png"/>
                        </a>
                        <a target="_blank" href="https://github.com/sebanob9" rel="noopener" >
                            <img src="github.png"/>
                        </a>
                    </div>
                    
                </header>
            </Link>
        )
    }
}
