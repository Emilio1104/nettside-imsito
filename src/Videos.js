import React, { Component } from 'react';
import styled from 'styled-components';
import VideoPlayer from './VideoPlayer';
import './index.css';


class Videos extends Component{
	render(){
		return(
			<Videopage>
				<VideoPlayer Id="X8HbAYBkLak"/>
			</Videopage>
		);
	}
}
	
export default Videos;

const Videopage = styled.div`
    background: transparent;
`;