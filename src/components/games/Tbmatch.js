import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Tbmatch extends Component {
    componentDidMount() {
        let symbols = [
            '✧', '▽ ', '◉'
        ];
        let colors = [
            'orange', 'lightgreen', 'royalblue', 'crimson'
        ];

        let top = document.getElementById('top');
        let bottom = document.getElementById('bottom');

        let colorMatch = document.getElementById('color');
        let shapeMatch = document.getElementById('shape');
        let perfect = document.getElementById('perfect');
        let none = document.getElementById('none');

        let scoreBoard = document.querySelector('.score');

        let shapeSame = false;
        let colorSame = false;
        let score = 0;
        let time = 15;

        setInterval(()=>{
            time-=0.5;
            if(time===0){
                let form = document.getElementById('form');
                let input = document.getElementById('input');
                input.setAttribute('value', score);
                form.submit();
            }
        }, 500);

        let getShape = ()=>{
            let topSymbolIndex = Math.floor(Math.random()*3);
            let topColorIndex = Math.floor(Math.random()*4);
            let bottomSymbolIndex = Math.floor(Math.random()*3);
            let bottomColorIndex = Math.floor(Math.random()*4);

            shapeSame = (topSymbolIndex===bottomSymbolIndex);
            colorSame = (topColorIndex===bottomColorIndex);

            top.innerText = symbols[topSymbolIndex];
            top.style.color = colors[topColorIndex];
            bottom.innerText = symbols[bottomSymbolIndex];
            bottom.style.color = colors[bottomColorIndex];
        }

        getShape();
        scoreBoard.innerText = score;

        colorMatch.addEventListener('click', ()=>{
            score = (colorSame && !shapeSame) ? score+1 : score-1;
            scoreBoard.innerText = score;
            top.style.color = '#000';
            bottom.style.color = '#000';
            setTimeout(()=>getShape(), 40);
        });
        shapeMatch.addEventListener('click', ()=>{
            score = (shapeSame && !colorSame) ? score+1 : score-1;
            scoreBoard.innerText = score;
            top.style.color = '#000';
            bottom.style.color = '#000';
            setTimeout(()=>getShape(), 40);
        });
        perfect.addEventListener('click', ()=>{
            score = (shapeSame && colorSame) ? score+1 : score-1;
            scoreBoard.innerText = score;
            top.style.color = '#000';
            bottom.style.color = '#000';
            setTimeout(()=>getShape(), 40);
        });
        none.addEventListener('click', ()=>{
            score = (!shapeSame && !colorSame) ? score+1 : score-1;
            scoreBoard.innerText = score;
            top.style.color = '#000';
            bottom.style.color = '#000';
            setTimeout(()=>getShape(), 40);
        });
    }

    render() {
        return (
            <div style={tbBoardStyle} className="tbBoard" >
                <Link className="homeButton" to={ '/' } onClick={ this.props.refresh } />
                <div className="score"><i class="fas fa-home"></i></div>
                <div style={ canvasStyle } id="canvasContainer">
                    <div id="top"></div>
                    <div id="bottom"></div>
                </div>
                <div id="tbButtonContainer">
                    <button id="color">Color</button>
                    <button id="shape">Shape</button>
                    <button id="perfect">Perfect</button>
                    <button id="none">None</button>
                </div>
                <form id="form" action="score" method="get">
                    <input id="input" type="hidden" name="score" />
                </form>
            </div>
        )
    }
}

const tbBoardStyle = {
    display: "flex",
    flexDirection: "column",
    background: "#000"
}

const canvasStyle = {
    width: "100vw",
    height: "66vh",
    display: "flex",
    flexDirection: "column"
}

Tbmatch.propTypes = {
    refresh: PropTypes.func.isRequired
}