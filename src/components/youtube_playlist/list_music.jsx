import React from "react";
import '../../scss/youtube_playlist/youtube.scss'

export default function PlaylistMusic(props){
    
    const changeSong = (item, event) => {
        props.onClick(item.snippet.resourceId.videoId, event.target.classList);
    }
    return(
        <div className="music_container">
            {props.list.map((item, index) => {
                return <p 
                key={item.snippet.resourceId.videoId} 
                onClick={(event) => changeSong(item, event)} className={"item" + (index === 0 ? " selected" : "")}
                data-id={item.snippet.resourceId.videoId}
                >
                    {item.snippet.title}
                </p>
            })}
        </div>
    );
}