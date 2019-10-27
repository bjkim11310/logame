import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import uuid from 'uuid';
import Header from './components/layout/Header';
import Score from './components/layout/Score';
import Homepage from './components/layout/Homepage';
import Memgrid from './components/games/Memgrid';
import Tbmatch from './components/games/Tbmatch';
import Wcmatch from './components/games/Wcmatch';
import './App.css';

class App extends Component {
  state = {
    games: [
      {
        id: uuid.v4(),
        name: 'Word-Color Match',
        abbrev: 'wcmatch',
      },
      {
        id: uuid.v4(),
        name: 'Top-Bottom Match',
        abbrev: 'tbmatch'
      },
      {
        id: uuid.v4(),
        name: 'Memory Grid',
        abbrev: 'memgrid'
      }
    ]
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" component={Homepage}>
              <div className="games"><Homepage games={this.state.games} /></div>
            </Route>
            <Route path="/wcmatch" component={ Wcmatch } />
            <Route path="/tbmatch" component={ Tbmatch } />
            <Route path="/memgrid" component={ Memgrid } />
            <Route path="/score" component={ Score } />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
