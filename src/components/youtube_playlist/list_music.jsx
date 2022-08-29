import React from "react";
import '../../scss/youtube_playlist/youtube.scss'

export default function PlaylistMusic(props){
    const items = props.list;
    const changeSong = (item) => {
        props.onClick(item.snippet.resourceId.videoId);
    }
    return(
        <div className="music_container">
            {props.list.map((item) => {
                return <p onClick={() => changeSong(item)} className="item">{item.snippet.title}</p>
            })}
        </div>
    );
}