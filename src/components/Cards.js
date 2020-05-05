import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from './Card';
import Spinner from './spinner/Spinner';

import classes from '../styles/cards.module.scss';
import * as phoneActions from './store/actions/index';


class Cards extends Component {
   
    componentDidMount () {
        this.props.onInitPhones();  
    }

    componentDidUpdate() {
        console.log('PROPS:', this.props.phn);
    }

    render() {
        
        let phones = <Spinner/>
            
            if (this.props.loading) {
                phones = this.props.phn.map(phone => {
                    return <Card 
                    phoneModel={phone}
                    key={phone.id}
                    /> ;
                });
            }

        return (
            <div className={classes.container}>
                {phones}
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(Cards);

