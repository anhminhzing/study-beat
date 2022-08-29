import React, { useState } from "react";
import { useEffect } from "react";
import VideoBackground from "../components/youtube_playlist/video_background";
import PlaylistMusic from "../components/youtube_playlist/list_music";
import "../scss/main.scss";

export default function PlaylistYoutube(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState(["1"]);
    const [pageToken, setPageToken] = useState();
    const [id, setid] = useState();

    const apikey = process.env.REACT_APP_API_URL;
    const playListID = "PLd5q8kTiY8vWp-4fRxhHEpWm42QdzbJeb";
    const maxResults =50; // min=5 (default) max=50

    const url_default = "https://www.googleapis.com/youtube/v3/playlistItems";
    let paramter = `?part=snippet&playlistId=${playListID}&maxResults=${maxResults}&key=${apikey}`;
    let url = `${url_default}${paramter}`
    useEffect(() => {
        fetch(url)
            .then(res  => res.json())
            .then(
                (result)=>{
                    setIsLoaded(true);
                    setItems(result.items)
                    console.log(result);
                    setPageToken(result.nextPageToken);
                    setid(result.items[0].snippet.resourceId.videoId);
                },
                (error)=>{
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);


    const callapi = () => {
        let nextUrl = url + `&pageToken=${pageToken}`;
        setIsLoaded(false);
        console.log("next url:" +nextUrl);
        fetch(nextUrl)
            .then(res  => res.json())
            .then(
                (result)=>{
                    setIsLoaded(true);
                    setItems(result.items)
                    console.log(result);
                },
                (error)=>{
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }

    const changeSong = (id) =>    {
        console.log("change song 2: " + id);
        setid(id);
    }

   if(error){
        return <div>Error: {error.message}</div>
   } else if(!isLoaded){
        return <div>Loading...</div>
   } else{
        return (
            <div className="main">
                {/* <button className="btn btn-primary" onClick={callapi}>click to call again</button>
                <ul className="list">
                    {items.map(item => (
                        <li key={item.id}>
                            {item.snippet.title}
                        </li>
                    ))}
                </ul> */}
                {/* <h1>My playlist</h1> */}
                <VideoBackground id={id} ></VideoBackground>
                <PlaylistMusic onClick={changeSong} list={items}></PlaylistMusic>
            </div>
        );
   }
}
