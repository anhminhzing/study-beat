import React from "react";
import ReactPlayer from 'react-player';
import AudioControl from '../components/audiocontrol';
import PauseScreen from './pauseScreen';
import Music_container from '../components/music_container';
import list_music from "../json/list_music";
import '../scss/main.scss';



export default class MainLayout extends React.Component{
    state = {
        play: true,
        music:list_music[0],
    };
 
    playStateChange = (changeMusic) => {
        if(changeMusic === false){
            if(this.state.play === true){
                this.setState({
                    play: false,
                });
            } else{
                this.setState({
                    play: true,
                });
            }
        }else{
            this.setState({
                play: true,
            });
        }
    }

    changeMusic = (item)=>{
        console.log("change music");
        this.setState({
            music: item,
            play: true,
        });
        this.playStateChange(true);
    }

    render(){
        return (
            <div className="main">
                <Music_container list_music={list_music} changeMusic={this.changeMusic}></Music_container>
                <p className="name">{this.state.music.name}</p>
                {this.state.play === false ? <PauseScreen/> : " "}
                <div className='container-fluid'>
                    <div className="row">
                        <div className='col-12'>
                        <ReactPlayer 
                            className="react-player"
                            url= {this.state.music.url}
                            playing={this.state.play}
                            loop={true}
                            muted={true}
                            width='130%'
                            height='130%'
                            controls={false}
                        />
                        <AudioControl
                            playStateChange={this.playStateChange} 
                            play={this.state.play}
                            url= {this.state.music.url}>
                        </AudioControl>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
        
}