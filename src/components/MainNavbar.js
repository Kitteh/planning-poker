import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

export default class MainNavbar extends React.Component 
{
   render (){
        return <Navbar bg='light' expand='lg'>
          <Navbar.Brand href='/'>
            Planning Poker
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/'>New Game</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          <Image src='/assets/poker-symbols-colour.png'/>
        </Navbar>
    }
}