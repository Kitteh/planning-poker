import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import JoinGameControls from '../components/JoinGameControls';
import PlayerList from '../components/PlayerList';
import GameAPI from './../api/GameAPI';
import PlanningLogger from './../api/PlanningLogger';
import ScoreControls from '../components/ScoreControls';
import ScoreSummary from '../components/ScoreSummary';

export default class Game extends React.Component 
{
    constructor(props) {
        super(props);
        let gameId = this.props.match.params.id;
        
        this.state = {
            gameName: null,
            gameId: gameId,
            validGame: true,
            loading: true,
            playerId: null,
            game: null,
            showScore: false,
        }

        this.logger = new PlanningLogger();
    }

    componentDidMount(){
        const API = new GameAPI();
        API.getGame(this.state.gameId).then((game)=>{
            // check if the player is already joined
            let playerSessionId = sessionStorage.getItem(this.state.gameId + '-playerId');
            let index = game.data.getGame.players.items.findIndex(p => p.id == playerSessionId);
            let newPlayerId = null;
            if (index > 0){
                newPlayerId = playerSessionId
            }
            let players = game.data.getGame.players.items;
            this.setState({
                gameName: game.data.getGame.title,
                game: game,
                loading: false,
                playerId: newPlayerId,
                showScore: false,
                players: players,
            });
        }).catch((reason) => {
            this.setState({validGame: false});
            this.logger.error(reason);
            }
        );
    }

    onJoinGameClick = (playerName) => { 
        const API = new GameAPI();
        API.joinGame(this.state.gameId, playerName).then((playerId) => {
            this.setState({playerId: playerId});
            sessionStorage.setItem(this.state.gameId + '-playerId', playerId);
        }).catch(reason => {
            this.logger.error(reason);
        });
    }

    onPlayerScoreClick = (score) => {
        const API = new GameAPI();
        API.setPlayerScore(this.state.playerId, score);
    }

    onClearScoreClick = () => {
        const API = new GameAPI();
        this.state.game.data.getGame.players.items.forEach((p) => {
            API.setPlayerScore(p.id, 0);
        });
    }

    onShowScoreClick = () => {
        this.setState({
            showScore: !this.state.showScore,
        });
    }

    render (){
        if (!this.state.validGame){
            return <div><Container>
            <div className='wrapper-box'>
            <Row><Col>Sorry! Game not found</Col></Row>
            </div>
        </Container></div>
        } else if (this.state.loading){
            return <div><Container>
            <div className='wrapper-box'>
            <Row><Col>Loading</Col></Row>
            </div>
            </Container></div>
        } else {
            return(<div><Container>
                <div className='wrapper-box'>
                <Row><Col><h1>Planning Poker: {this.state.gameName}</h1></Col></Row>
                <Row><Col>Join the current game, and vote using the controls.</Col></Row>
                <br />
                <Row><Col>Use the Clear score game to reset the current game, and show score controls when you're ready to show the scores</Col></Row>
                </div>
                <div className='wrapper-box'>
                {!this.state.playerId ? <Row><Col>Join the game by entering your name below:</Col></Row> : <ScoreControls onPlayerScoreClick={this.onPlayerScoreClick} onClearScoreClick={this.onClearScoreClick} onShowScoreClick={this.onShowScoreClick} />}
                {!this.state.playerId ? <JoinGameControls onJoinGameClick={this.onJoinGameClick} /> : null}
                {this.state.showScore ? <ScoreSummary players={this.state.players}/> : null}
                </div>
                <div className='wrapper-box'><Container><h2>Player List</h2> <PlayerList gameId={this.state.gameId} game={this.state.game} currentPlayerId={this.state.playerId} showScore={this.state.showScore} players={this.state.players} /></Container></div>
            </Container></div>);
        }
    }

}