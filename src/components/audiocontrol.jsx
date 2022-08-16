import React from "react";
import ReactPlayer from 'react-player';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';



export default class AudioControl extends React.Component{
    state = {
        volume: 0,
    }
    last_volumn = 0;
    
    
    adjustVolume = (value)=>{
        this.setState({
            volume: value  
        },()=> {
            console.log(this.state.volume);
        })
    }

    handlePlay = ()=>{
        this.props.playStateChange(false);
    }

    handleMute = () => {
        if(this.state.volume !== 0){
            this.last_volumn = this.state.volume;
            this.adjustVolume(0);
        } else{
            this.adjustVolume(this.last_volumn);
            this.last_volumn = 0;
        }
    }

    render() {
        return   <div className="audioControl">
        <ReactPlayer 
           className="react-player invisible"
           url={this.props.url}
           playing={this.props.play}
           loop={true}
           muted={false}
           controls={false}
           volume={this.state.volume}
         />
         {this.props.play === true ? 
           <PauseCircleIcon onClick={this.handlePlay} className="icon play-icon"></PauseCircleIcon> :
           <PlayCircleIcon onClick={this.handlePlay}  className="icon play-icon"></PlayCircleIcon>}
         {this.state.volume === 0 ? 
            <VolumeOffIcon onClick={this.handleMute} className="icon mute-icon"></VolumeOffIcon> :
            <VolumeMuteIcon onClick={this.handleMute} className="icon mute-icon"></VolumeMuteIcon>}
         <input
           className="volumeDial"
           type="range"
           min={0}
           max={1}
           value={this.state.volume}
           step={0.1}
           onChange={(event) => {
               this.adjustVolume(event.target.valueAsNumber);
           }}
           />
   </div>
    }
}