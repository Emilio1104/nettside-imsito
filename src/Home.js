import React, { Component } from 'react';
import styled from 'styled-components';


class Home extends Component {
    render() {
        return (
            <MenuContainer>
                <h1>Home</h1>
                <p>Heftige hjemme giser</p>
            </MenuContainer>
        );
    }
}
export default Home;

const MenuContainer = styled.div`
  background: none;
  margin: 0;
`;
