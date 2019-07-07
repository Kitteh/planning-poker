import {graphqlOperation, API} from 'aws-amplify';
import {createGame, createPlayer, updatePlayer} from '../graphql/mutations';
import {getGame} from '../graphql/queries';
import {onUpdatePlayer, onCreatePlayer} from '../graphql/subscriptions';

export default class GameAPI
{

    onCreatePlayerSubscription;
    onUpdatePlayerSubscription;

    /**
     * Create a game and return a given id
     * @param {string} gameName 
     * @returns {id} id of game created
     */
    createGame = async (gameName) => {
        const details = {
            title: gameName
        };
        const newGame = await API.graphql(graphqlOperation(createGame, {input: details}));
        return newGame.data.createGame.id;
    }

    /**
     * Retrieve a game with a given GameID
     * @param {string} gameId 
     * @returns {Promise} a promise containing the game object
     */
    getGame = async (gameId) => {
        const game = await API.graphql(graphqlOperation(getGame, {id: gameId}));
        return game;
    }

    /**
     * Join a player to a given game
     * @param {string} gameId
     * @param {string} playerName
     */
    joinGame = async (gameId, playerName) => {
        const details = {
            name: playerName,
            score: 0,
            playerGameId: gameId,
            gameId: gameId,
        }
        const player = await API.graphql(graphqlOperation(createPlayer, {input: details}));
        const playerId = player.data.createPlayer.id;
        return playerId;
    }

    /**
     * Set the score for a specified Player
     * @param {string} playerId
     * @param {int} score to set for the player
     */
    setPlayerScore = async (playerId, score) => {
        const details = {
            id: playerId,
            score: score,
        }
        await API.graphql(graphqlOperation(updatePlayer, {input: details}));
    }

    /**
     * Open a subscription for any Player Updates
     * @param {string} gameId
     * @param callback for new players
     * @param callback for updated players
     */
    createPlayerSubscription = async (gameId, onNewPlayerCallback, onUpdatedPlayerCallback) =>{
        const onCreatePlayerSubscription = API.graphql(
            graphqlOperation(onCreatePlayer, {gameId: gameId})
        ).subscribe({
            next: (playerData) => {
                onNewPlayerCallback(playerData.value.data.onCreatePlayer)
            }
        });

        this.onCreatePlayerSubscription = onCreatePlayerSubscription;

        const onUpdatePlayerSubscription = API.graphql(
            graphqlOperation(onUpdatePlayer, {gameId: gameId})
        ).subscribe({
            next: (playerData) => {
                onUpdatedPlayerCallback(playerData.value.data.onUpdatePlayer)
            }
        });

        this.onUpdatePlayerSubscription = onUpdatePlayerSubscription;
    }

    destroyPlayerSubscription(){
        this.onCreatePlayerSubscription.unsubscribe();
        this.onUpdatePlayerSubscription.unsubscribe();
    }


}