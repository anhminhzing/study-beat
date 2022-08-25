import React from "react";
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import '../scss/intro.scss'


export default class IntroScreen extends React.Component{
    element = (
        <div className="intro">
           <ReactPlayer 
                className="react-player"
                url='https://www.youtube.com/watch?v=GrG2-oX5z24'
                playing={true}
                loop={true}
                muted={true}
                width='130%'
                height='130%'
                controls={false}
            />
            <div className="cover">
                <Link to="/study-beat/list">
                    <button type="button" className="button btn btn-primary">Start to listen</button>
                </Link>
                <Link to="/study-beat/playlist-youtube">
                    <button type="button" className="button btn btn-primary">Demo</button>
                </Link>
            </div>
        </div>
    );
        
    render(){
        return this.element;
    };
}