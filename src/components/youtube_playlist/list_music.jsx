import React from "react";
import '../../scss/youtube_playlist/youtube.scss'

export default function PlaylistMusic(props){
    const items = props.list;
    return(
        <div className="music_container">
            {props.list.map((item) => {
                return <p className="item">{item.snippet.title}</p>
            })}
        </div>
    );
}