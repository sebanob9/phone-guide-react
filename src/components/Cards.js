import React, { Component } from 'react';

import Card from './Card';
import axios from '../axios';
import Spinner from './spinner/Spinner';

import classes from '../styles/cards.module.scss';

class Cards extends Component {
    state = {
        apiResponse: [],
        loading: false
    }

    componentDidMount () {
        this.setState( { loading: true } );

    axios.get( 'http://localhost:9000/phones' )
        .then( response => {
            const phones = response.data;
            const updatedPhones= phones.map(phone => {
                return {
                    ...phone
                }
            });
            this.setState({apiResponse: updatedPhones, loading: false});
        } )
        .catch(error => {
            this.setState({loading: false});;
        });
}

    phoneSelectedHandler = (id) => {
        this.setState({selectedPhoneId: id});
        console.log(this.state);
    }

    render() {
        
        let phones = this.state.apiResponse.map(phone => {
                return <Card 
                phoneModel={phone}
                key={phone.id}
                clicked={() => this.phoneSelectedHandler(phone.id)}
                /> ;
            });
            
            if (this.state.loading) {
                phones = <Spinner/>;
            }

        return (
            <div className={classes.container}>
                {phones}
            </div>
        );
    }
}

export default Cards;

