import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './index.css';

class VideoPlayer extends Component{
    render(){
        const opts = {
            height:'315',
            width: '560',
            playerVars: {
                autoplay: 1,
                listType: 'user_uploads',
                list: 'IMSITO'


            }
        };

        return (
            <YouTube
                className="Youtube"
                videoId={this.props.Id}
                opts={opts}
                onReady={this._onReady}
                />
        );
    }
    _onReady(event){
        event.target.pauseVideo();
    }
}

export default VideoPlayer;