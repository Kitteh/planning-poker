import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default class About extends React.Component 
{

    render (){
        return(<div><Container>
                <div className='wrapper-box'>
                <Row><Col><h1>About Planning Poker</h1></Col></Row>
                <Row><Col>Planning poker, also called Scrum poker, is a consensus-based, gamified technique for estimating, mostly used to estimate effort or relative size of development goals in software development.</Col></Row>
                <br />
                <Row><Col>In planning poker, members of the group make estimates by playing numbered cards face-down to the table, instead of speaking them aloud. The cards are revealed, and the estimates are then discussed. By hiding the figures in this way, the group can avoid the cognitive bias of anchoring, where the first number spoken aloud sets a precedent for subsequent estimates. </Col></Row>
                <br />
                </div>
                <div className='wrapper-box'>
                   <h2>Rules</h2>
                   <ul>
                       <li>All players must vote in secret before revealing their scores</li>
                       <li>Any players not voting will not be counted towards the story</li>
                   </ul>
                </div>
            </Container></div>);
    }

}