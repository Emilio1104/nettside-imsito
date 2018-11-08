import React, { Component } from 'react';
import AlbumPanel from './AlbumPanel';
import styled from 'styled-components';

class Music extends Component {
    render() {
        return(
	<Musicpage>
		<Flexbox>
			<AlbumPanel albumName="SitoSnake" albumSource="https://dummyimage.com/272x230/000/fff"/>
			<AlbumPanel albumName="Singel1" albumSource="https://dummyimage.com/272x230/000/fff"/>
            <AlbumPanel albumName="Singel2" albumSource="https://dummyimage.com/272x230/000/fff"/>
			<AlbumPanel albumName="Singel3" albumSource="https://dummyimage.com/272x230/000/fff"/>
		</Flexbox>
        <Spotify/>
	</Musicpage>
        );}
};
export default Music;

const Flexbox = styled.div`
    display: flex;
`;

const Musicpage = styled.div`
    padding: 5rem;
    display: block;
`;

const Spotify = styled.iframe.attrs({
    title: "Spotify Player",
    id: "spotify-player",
    src: 'https://open.spotify.com/embed/album/4KLgjmJZtRHV9HsE72EELa',
    width: '300',
    height: '80',
    allow: 'encrypted-media'})`

    width: 75%;
    position: fixed;
    left: 50%;
    margin-left: -37.5%;
    bottom: 0;
    `;
