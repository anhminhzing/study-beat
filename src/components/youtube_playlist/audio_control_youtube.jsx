import React from "react";
import ReactPlayer from 'react-player';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';



export default class AudioControlYoutube extends React.Component{
    last_volumn = 0;
    
    
    adjustVolume = (value)=>{
       this.props.changeVolume(value);
    }

    handlePlay = ()=>{
        this.props.playStateChange(false);
    }

    handleMute = () => {
        if(this.props.volume !== 0){
            this.last_volumn = this.props.volume;
            this.adjustVolume(0);
        } else{
            this.adjustVolume(this.last_volumn);
            this.last_volumn = 0;
        }
    }

    render() {
        return   <div className="audioControl">
         {this.props.playState === true ? 
           <PauseCircleIcon onClick={this.props.changePlay} className="icon play-icon"></PauseCircleIcon> :
           <PlayCircleIcon onClick={this.props.changePlay}  className="icon play-icon"></PlayCircleIcon>}
         {this.props.volume === 0 ? 
            <VolumeOffIcon onClick={this.handleMute} className="icon mute-icon"></VolumeOffIcon> :
            <VolumeMuteIcon onClick={this.handleMute} className="icon mute-icon"></VolumeMuteIcon>}
         <input
           className="volumeDial"
           type="range"
           min={0}
           max={1}
           value={this.props.volume}
           step={0.1}
           onChange={(event) => {
               this.adjustVolume(event.target.valueAsNumber);
           }}
           />
   </div>
    }
}