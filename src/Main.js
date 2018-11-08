import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from './Pages/Home';
import Music from './Pages/Music';
import Videos from './Pages/Videos';
import Beats from './Pages/Beats';
import Mixing from './Pages/Mixing';
import './index.css';
import styled from 'styled-components';
 
class Main extends Component {
  render() {
    return (
      <MainView>
       <HashRouter>
         <Mainpage>
           <Menuwrap>
           <Head>Imsito</Head>
              <Menu> 
              <ListItem><NLink to="/">Home</NLink></ListItem>
              <ListItem><NLink to="/Music">Music</NLink></ListItem>
              <ListItem><NLink to="/Videos">Videos</NLink></ListItem>
              <ListItem><NLink to="/Beats">Beats</NLink></ListItem>
              <ListItem><NLink to="/Mixing">Mixing</NLink></ListItem>
              </Menu>
              </Menuwrap>
            <Content>
              <Route exact path="/" component={Home}/>
              <Route path="/Music" component={Music}/>
              <Route path="/Videos" component={Videos}/>
              <Route path="/Beats" component={Beats}/>
              <Route path="/Mixing" component={Mixing}/>
            </Content>
          </Mainpage>  
       </HashRouter>
      </MainView>
    );
  }
}
 
export default Main;

const Menuwrap = styled.div`
  display: flex;
  padding-bottom: 30px;
`;

const Mainpage = styled.div`
  background: none;
  margin: 0;
`;

const Menu = styled.ul`
  background: none;
  margin: 0;
  display: flex;
  align-content: center;
 

`;

const Head = styled.h1`
background: none;
font-size: 30px;
left: 16px;
padding-right: 50px;
display: inline;
color: darkgray;
font-family: "Helvetice neue light", sans-serif;
text-transform: uppercase;
padding-top: 20px;
padding-left: 40px;

`;

const MainView = styled.div`
  background-color: none;
`;

const NLink = styled(NavLink)`
  color: darkgray;
  text-decoration: none;
  padding-left: 100px;
  padding-top: 20px;
  display: flex;
  align-self: center;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 15px;
  font-family: "Helvetice neue light", sans-serif;
`;

const Content = styled.div`
  background: none;
  padding-left: 42px;

`;

const ListItem = styled.li`
  display: flex;
  list-style-type: none;
  font-size: xx-large;

`;
