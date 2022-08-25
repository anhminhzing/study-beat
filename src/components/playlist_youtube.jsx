import React, { useState } from "react";
import { useEffect } from "react";

export default function PlaylistYoutube(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [pageToken, setPageToken] = useState();


    const apikey = "AIzaSyADJobPgS5I7zto67mSnD-3bVKsKJ6YKUI";
    const playListID = "PLd5q8kTiY8vWp-4fRxhHEpWm42QdzbJeb";
    const maxResults =50; // min=5 (default) max=50

    const url_default = "https://www.googleapis.com/youtube/v3/playlistItems";
    let paramter = `?part=snippet&playlistId=${playListID}&maxResults=${maxResults}&key=${apikey}`;
    let url = `${url_default}${paramter}`
    useEffect(() => {
        console.log("url: " + url);
        fetch(url)
            .then(res  => res.json())
            .then(
                (result)=>{
                    setIsLoaded(true);
                    setItems(result.items)
                    console.log(result);
                    setPageToken(result.nextPageToken);

                },
                (error)=>{
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);


    const callapi = () => {
        // console.log(this.nextPageToken);
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

   if(error){
        return <div>Error: {error.message}</div>
   } else if(!isLoaded){
        return <div>Loading...</div>
   } else{
        return (
            <div className="myPlaylist">
                <button className="btn btn-primary" onClick={callapi}>click to call again</button>
                <h1>My playlist</h1>
                <ul className="list">
                    {items.map(item => (
                        <li key={item.id}>
                            {item.snippet.title}
                        </li>
                    ))}
                </ul>
            </div>
        );
   }
}
