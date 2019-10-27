import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Score extends Component {
    render() {
        const search = this.props.location.search;
        const params = new URLSearchParams(search);
        const score = params.get('score');
        return (
            <div>
                <Link className="homeButton" to={ '/' } />
                <p style={ scoreStyle } className="scoreDisplay">{ score }</p>
            </div>
        )
    }
}

const scoreStyle = {
    width: '100vw',
    lineHeight: '100vh',
    textAlign: 'center',
    fontSize: '1250%',
    background: '#000',
    color: '#fff',
    fontFamily: "'Abel', sans-serif",
}
