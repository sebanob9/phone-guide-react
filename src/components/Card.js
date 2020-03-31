import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import classes from '../styles/cards.module.scss';

class Card extends Component {
    render() {
        const {phoneModel} = this.props;
        return <div className={classes.articles} >
                    <article className={classes.article}>
                        <h2 className={classes.title}>{phoneModel.manufacturer} {phoneModel.name} </h2>
                        <div className={classes.boxImage}>
                            <img src={phoneModel.imageFileName} className={classes.image}></img>
                        </div>  
                        <div className={classes.boxData}>
                            <p className={classes.ram}>{phoneModel.ram}GB ram</p>
                            <div className={classes.price}>
                                <span>{phoneModel.price}€</span>
                            </div>
                            <Link to={'/' + phoneModel.id}>
                                <p className={classes.link}>More Info</p>
                            </Link>
                        </div>
                    </article>
                </div>      
    } 
}

export default Card;