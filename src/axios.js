import axios from 'axios';

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
    this.setState({loading: false});
});
}