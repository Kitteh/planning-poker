import React from 'react';
export default class Player extends React.Component 
{
    constructor(props){
        super(props);
        this.state = {
            playerName: this.props.player.name,
            score: this.props.player.score,
            currentPlayer: this.props.currentPlayer,
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            score: nextProps.player.score,
            currentPlayer: nextProps.currentPlayer,
        })
    }

    render(){
        let scoreText = 'Voted';
        if(this.state.currentPlayer){
            scoreText = this.state.score;
        } else {
            scoreText = (this.state.score <= 0) ? '-': 'Voted';
        }

        return <tr><td>{this.state.playerName} </td><td> {scoreText}</td></tr>;
    }

}