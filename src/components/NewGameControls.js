import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

export default class NewGameControls extends React.Component 
{
    
    constructor(props){
        super(props);
        this.state = {
            'newgame' : false,
            'loading' : true,
        };
        this.newGame = React.createRef();
        this.joinGame = React.createRef();
    }

    componentDidMount(){
        this.setState({'loading' : false})
    }

    onNewGameClick = (e) => {
        if (this.newGame.value){
            this.props.onNewGameClick(this.newGame.value);
            this.setState({'loading' : true})
        }
    }

    onNewGameToggle = (e) => {
        this.setState({'newgame' : !this.state.newgame})
    }

    onJoinGameClick = (e) => {
        if (this.joinGame.value){
            this.props.onJoinGameClick(this.joinGame.value);
            this.setState({'loading' : true})
        }
    }


    render (){
        if (this.state.loading){
            return 'loading..';
        }
        if (this.state.newgame == false){
            return(<div><Form>
                <Form.Row>
                        <Button variant='dark' onClick={ (e) => this.onNewGameToggle(e)}>New Game</Button>
                        <span className='new-controls__or'> or </span>
                        <Col>
                            <Form.Control type="game" placeholder="Join an Existing Game" ref={ref => { this.joinGame=ref;}}/>
                        </Col>
                            <Button variant="dark" type="submit" onClick={(e) => this.onJoinGameClick(e)}>
                                Join 
                            </Button>
                </Form.Row>
                </Form></div>)
        } else {
            return (
            <Form.Row>
            <Col>
                <Form.Control type="text" placeholder="Enter Name" ref={ref => { this.newGame= ref; }}/>
            </Col>
                <Button variant="dark" type="submit" onClick={this.onNewGameClick}>
                    Create Game
                </Button>
                <span className='new-controls__or'> or </span>
                <Button variant='dark' onClick={ (e) => this.onNewGameToggle(e)}>Back</Button>
            </Form.Row>)
        }
    }
}