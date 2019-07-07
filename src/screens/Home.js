import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Redirect } from 'react-router-dom';

import NewGameControls from './../components/NewGameControls';
import GameAPI from './../api/GameAPI';
import PlanningLogger from './../api/PlanningLogger'

export default class Home extends React.Component 
{

    constructor(props){
        super(props);
        this.state = {
            gameId : null,
        }
        this.logger = new PlanningLogger();
    }

    onNewGameClick = (gameName) => {
        let gameAPI = new GameAPI();
        gameAPI.createGame(gameName).then((newGameId) => {
                this.setState({gameId : newGameId}); // redirect to newly created game
            }
        ).catch( (error) => {
            this.logger.error(error);
        });
    }

    onJoinGameClick = (gameId) => {
        this.setState({gameId}); // redirect to existing game
    }

    redirectToGameRender(){
        return <Redirect to={'/game/' + this.state.gameId} />
    }

    render (){
        if (this.state.gameId){
            return this.redirectToGameRender();
        } else {
            return(<div><Container>
                    <div className='wrapper-box'>
                    <Row><Col><h1>Planning Poker</h1></Col></Row>
                    <Row><Col>Planning poker, also called Scrum poker, is a consensus-based, gamified technique for estimating, mostly used to estimate effort or relative size of development goals in software development.</Col></Row>
                    <br />
                    <Row><Col>In planning poker, members of the group make estimates by playing numbered cards face-down to the table, instead of speaking them aloud. The cards are revealed, and the estimates are then discussed. By hiding the figures in this way, the group can avoid the cognitive bias of anchoring, where the first number spoken aloud sets a precedent for subsequent estimates. </Col></Row>
                    <br />
                    <Row><Col>To start, or join a game, click on one of the controls below</Col></Row>
                    </div>
                    <div className='wrapper-box'>
                        <NewGameControls onNewGameClick={this.onNewGameClick} onJoinGameClick={this.onJoinGameClick} />
                    </div>
                </Container></div>);
        }
    }

}