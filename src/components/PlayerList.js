import React from 'react';
import Table from 'react-bootstrap/Table';
import Player from './Player';
import GameAPI from '../api/GameAPI';

export default class PlayerList extends React.Component 
{
    constructor(props){
        super(props);
        let players = this.props.players;
        this.state = {
            gameId: this.props.gameId,
            players: players,
            loading: true,
            currentPlayerId: this.props.currentPlayerId,
            showScore: this.props.showScore,
        };
    }

    renderPlayers = (players) => {
        let currentPlayerId = this.state.currentPlayerId;
        return (<Table> 
            <thead>
                <tr>
                <th>Player Name</th>
                <th>Score</th>
                </tr>
            </thead>
            <tbody>
            {players.map((player) => {
            if (currentPlayerId == player.id || this.state.showScore){
                return <Player key={player.id} player={player} currentPlayer={true}/>
            } else {
                return <Player key={player.id} player={player} currentPlayer={false}/>
            }})}
            </tbody>
        </Table>)
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            showScore: nextProps.showScore,
            currentPlayerId: nextProps.currentPlayerId
        });
    }

    componentDidMount(){
        const api = new GameAPI();
        api.createPlayerSubscription(this.state.gameId,
            this.onCreatePlayer, this.onUpdatePlayer);
        this.setState({
            loading: false,
            api: api,
        });
    }

    componentWillUnmount(){
        this.state.api.destroyPlayerSubscription();
    }

    onCreatePlayer = (newPlayer) => {
        let players = this.state.players;
        players.push(newPlayer);
        this.setState({
            players: players,
        });
    }

    onUpdatePlayer = (updatedPlayer) => {
        const updatedPlayers = this.state.players;
        let index = updatedPlayers.findIndex(p => p.id == updatedPlayer.id);
        updatedPlayers[index] = updatedPlayer;
        this.setState({
            players : updatedPlayers,
        });
    }


    render(){
        if (this.state.loading){
            return <div></div>
        }
        return(this.renderPlayers(this.state.players))
    }
}