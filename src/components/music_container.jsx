import React from "react";

const Music_container = (props)=>{

    function handleMusic (item){
        props.changeMusic(item);
    }

   const element = props.list_music.map((item, index) =>(
        <p onClick={() => handleMusic(item) } className="item">{item.name}</p>
   ))
    return (
       <div className="music_container">
            {element}
       </div>
    );
}
export default Music_container;