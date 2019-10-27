import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Homepage extends Component {
    render() {
        return this.props.games.map(game => (
            <Link className="link" style={ linkStyle } key={game.id} to={ '/'+game.abbrev } refresh={this.props.refresh} >{ game.name }</Link>
        ));
    }
}


const linkStyle = {
    textDecoration: 'none',
    fontSize: '4.25vh',
    fontFamily: 'Courier New',
    lineHeight: '33vh',
    textAlign: 'center'
}

// PropTypes
Homepage.propTypes = {
    games: PropTypes.array.isRequired
}