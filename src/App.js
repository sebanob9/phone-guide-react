import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';

import Cards from './components/Cards';
import Fullcard from './components/Fullcard';
import Header from './components/header';

import global from './styles/global.module.scss';
import classes from './styles/cards.module.scss';

import { Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={global.App}>
          <div className={classes.App}>
            <Header/>
            <main>
                <Route path="/" exact component={Cards} />
                <Route path="/:id" exact component={Fullcard} />
            </main>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
