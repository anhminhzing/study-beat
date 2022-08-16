import React from "react";

export default function PauseScreen(){
    return (
        <div className="pauseScreen">
            <p>Paused Music</p>
           <div className="loading">
            <div class="lds-heart"><div></div></div>
           </div>
        </div>
    );
}