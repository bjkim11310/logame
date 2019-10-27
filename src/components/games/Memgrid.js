import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Memgrid extends Component{
    componentDidMount() {
        let board = document.querySelector('.cellContainer');
        let div = [];
        let greenTile = [];

        let wrong = false;
        let num = Math.floor(Math.random()*3+8);
        let openNum = 0;
        let open = [];
        let hide = false;

        let score = 0;
        let scoreBoard = document.querySelector('.score');
        scoreBoard.innerText = score;

        for(let i=0; i<20; i++){
            div[i] = document.createElement('div');
            board.appendChild(div[i]);
        }

        let scramble = ()=>{
            hide = false;
            openNum = 0;
            for(let i=0; i<20; i++){
                open[i] = false;
                greenTile[i] = false;
                div[i].style.background = '#fff';
            }
            num = Math.floor(Math.random()*3+8);
            for(let i=0; i<num; i++){
                greenTile[i] = true;
                div[i].style.background = 'lightgreen';
            }
            for(let i=0; i<20; i++){
                let index = Math.floor(Math.random()*20);
                let dummyBool = greenTile[i];
                greenTile[i] = greenTile[index];
                greenTile[index] = dummyBool;

                let dummyColor = div[i].style.background;
                div[i].style.background = div[index].style.background;
                div[index].style.background = dummyColor;
            }

            setTimeout(()=>{
                for(let i=0; i<20; i++){
                    div[i].style.background = '#fff';
                }
                hide = true;
            }, 2100);
        }

        scramble();

        let flip = (index)=>{
            if(!open[index]){
                openNum++;
                div[index].style.background = 'royalblue'
            } else {
                openNum--;
                div[index].style.background = '#fff';
            }
            open[index] = !open[index];
            console.log(openNum);

            if(openNum===num){
                for(let j=0; j<20; j++){
                    if(open[index]!==greenTile[index]) wrong = true;
                }
                if(wrong){
                    let form = document.getElementById('form');
                    let input = document.getElementById('input');
                    input.setAttribute('value', score);
                    form.submit();
                } 
                else{
                    score++;
                    scoreBoard.innerText = score;
                    scramble();
                }
            }
        }

        for(let i=0; i<20; i++){
            // eslint-disable-next-line no-loop-func
            div[i].addEventListener('click', ()=>{
                if(hide){
                    flip(i);
                    
                }
            });
        }
    }

    render() {
        return (
            <div className="mgBoard" >
                <Link className="homeButton" to={ '/' } onClick={this.props.refresh} />
                <div className="score"></div>
                <div className="cellContainer">
                </div>
                <form id="form" action="score" method="get">
                    <input id="input" type="hidden" name="score" />
                </form>
            </div>
        )
    }
}

Memgrid.propTypes = {
    refresh: PropTypes.func.isRequired
}