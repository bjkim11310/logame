import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Wcmatch extends Component{
    componentDidMount() {
        let colors = [
            'red', 'orange', 'yellow', 'green'
        ];
        
        let scoreBoard = document.querySelector('.score');
        let word = document.querySelector('.word');
        let matchBtn = document.getElementById('wcMatch');
        let notMatchBtn = document.getElementById('wcNotMatch');
        
        let score = 0;
        let match = false;
        let time = 10;
        
        setInterval(()=>{
            time-=0.5;
            if(time===0){
                let form = document.getElementById('form');
                let input = document.getElementById('input');
                input.setAttribute('value', score);
                form.submit();
            }
        }, 500);
        
        let getWord = ()=>{
            let txtIndex = Math.floor(Math.random()*4);
            colors[4] = colors[txtIndex];
            let colorIndex = Math.floor(Math.random()*5);
            word.innerText = colors[txtIndex];
            word.style.color = colors[colorIndex];
            match = (colors[txtIndex]===colors[colorIndex]);
        }
        
        getWord();
        scoreBoard.innerText = score;
        
        matchBtn.addEventListener('click', ()=>{
            score = match ? score+1 : score-1;
            scoreBoard.innerText = score;
            word.style.color = '#000';
            setTimeout(()=>getWord(), 40);
        });
        
        notMatchBtn.addEventListener('click', ()=>{
            score = !match ? score+1 : score-1;
            scoreBoard.innerText = score;
            word.style.color = '#000';
            setTimeout(()=>getWord(), 40);
        });
        
    }

    render() {
        return (
            <div className="wcBoard">
                <Link className="homeButton" to={ '/' } refresh="true" />
                <div className="score"><i class="fas fa-home"></i></div>
                <div style={ wordStyle } className="word"></div>
                <button style={ matchStyle } id="wcMatch" >Match</button>
                <button style={ notMatchStyle } id="wcNotMatch" >Not Match</button>
                <form id="form" action="score" method="get">
                    <input id="input" type="hidden" name="score" />
                </form>
            </div>
        )
    }
}

const wordStyle = {
    width: '100vw',
    lineHeight: '80vh',
    textAlign: 'center',
    fontSize: '600%',
    background: '#000',
    fontFamily: "'Nunito', sans-serif",
}

const matchStyle = {
    border: 'none',
    width: '100vw',
    lineHeight: '10.05vh',
    textAlign: 'center',
    background: '#37db76',
    fontSize: '250%',
    fontFamily: "'Josefin Sans', sans-serif"
}

const notMatchStyle = {
    border: 'none',
    width: '100vw',
    lineHeight: '10.05vh',
    textAlign: 'center',
    background: '#d62929',
    fontSize: '250%',
    fontFamily: "'Josefin Sans', sans-serif"
}