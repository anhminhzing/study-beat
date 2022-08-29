import React from "react";
import ReactPlayer from "react-player";

export default function VideoBackground(props){
    const url = `https://www.youtube.com/embed/${props.id}?autoplay=0&mute=0&start=1`;
    return (
        <div className="video_background">
            <ReactPlayer 
                className="react-player"
                url= {url}
                playing={props.playState}
                loop={true}
                muted={false}
                width='130%'
                height='130%'
                controls={false}
                volume={props.volume}
            />
        </div>
    );  
}