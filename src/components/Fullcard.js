import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import axios from '../axios';
import Spinner from './spinner/Spinner';

import classes from '../styles/fullcard.module.scss';

export default class Fullcard extends Component {
    state = {
        loadedPhone: null
    }

    componentDidMount () {
        console.log(this.props.match.params.id);
        axios.get( 'http://localhost:9000/phones/' + this.props.match.params.id )
                    .then( response => {
                        console.log(response.data);
                        this.setState({loadedPhone: response.data});
                    }); 
    }

    render() {
        
        let phone = <Spinner/>;
        if ( this.state.loadedPhone ) {
            phone = (
                <section>
                    <picture>
                        <img src={this.state.loadedPhone.imageFileName} className={classes.image} alt={this.state.loadedPhone.imageFileName}></img>
                    </picture>
                    <article>
                        <div>
                            <h2 className={classes.title}>{this.state.loadedPhone.manufacturer} {this.state.loadedPhone.name} </h2>
                        </div>
                        <div className={classes.info}>
                            <p className={classes.price}><span>Price: </span>{this.state.loadedPhone.price}€</p>
                            <p><span>Ram:</span> {this.state.loadedPhone.ram}GB</p>
                            <p><span>Color:</span> {this.state.loadedPhone.color}</p>
                            <p><span>Screen:</span> {this.state.loadedPhone.screen}</p>
                            <p ><span>Processor:</span>{this.state.loadedPhone.processor}</p>
                            <p className={classes.description}>{this.state.loadedPhone.description}</p>
                        </div>
                        <div className={classes.link} >
                            <Link to={'/'}>
                                <p>Back to catalogue</p>
                            </Link>
                        </div>
                    </article>
                </section>
            );
        }
        return phone;
    }
}