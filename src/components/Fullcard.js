import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as phoneActions from './store/actions/index';
import { Link } from 'react-router-dom';
import Spinner from './spinner/Spinner';

import classes from '../styles/fullcard.module.scss';

class Fullcard extends Component {

    componentDidMount () {
        this.props.onInitPhones();  
    }

    componentDidUpdate() {
        console.log('PROPS:', this.props.phn[this.props.match.params.id]);
    }

    render() {
        const phoneModel = this.props.phn;
        const param = this.props.match.params.id;

        let phone = <Spinner/>;

        if (this.props.loading) {
            phone = (
                <section>
                    <picture>
                        <img src={phoneModel[param].imageFileName} className={classes.image} alt={phoneModel[param].imageFileName}></img>
                    </picture>
                    <article>
                        <div>
                            <h2 className={classes.title}>{phoneModel[param].manufacturer} {phoneModel[param].name} </h2>
                        </div>
                        <div className={classes.info}>
                            <p className={classes.price}><span>Price: </span>{phoneModel[param].price}€</p>
                            <p><span>Ram:</span> {phoneModel[param].ram}GB</p>
                            <p><span>Color:</span> {phoneModel[param].color}</p>
                            <p><span>Screen:</span> {phoneModel[param].screen}</p>
                            <p ><span>Processor:</span>{phoneModel[param].processor}</p>
                            <p className={classes.description}>{phoneModel[param].description}</p>
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

const mapStateToProps = state => {
    return {
        phn: state.apiResponse,
        loading: state.loading
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitPhones: () => dispatch(phoneActions.initPhones())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fullcard);
