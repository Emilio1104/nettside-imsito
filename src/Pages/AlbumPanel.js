import React, { Component } from 'react';
import styled from 'styled-components';

class AlbumPanel extends Component {
	render(){
		return(<Albumpanel>
			<img alt={this.props.albumName} src={this.props.albumSource} />
			<Albuminformation>
                2018
			</Albuminformation>
		</Albumpanel>
		);
	}
}

export default AlbumPanel;

const Albumpanel = styled.div`
  width: 17rem;
  height: 20rem;
  margin-right: 1rem;
  background-color: brown;
`;
const Albuminformation = styled.div`
  position: relative;
  background-color: white;
  bottom: 0;
`;