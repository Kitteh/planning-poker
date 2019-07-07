import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

export default class JoinGameControls extends React.Component 
{
    
    constructor(props){
        super(props);
        this.state = {
            loading: false,
        };
        this.joinGame = React.createRef();
    }

    componentDidMount(){
    }

    onJoinGameClick = (e) => {
        e.preventDefault();
        if (this.joinGame.value){
            this.setState({loading: true});
            this.props.onJoinGameClick(this.joinGame.value);
        }
    }

    render (){
        if (this.state.loading){
            return <div>Loading...</div>
        } else {
            return(<div><Form>
                <Form.Row>
                        <Col>
                            <Form.Control type="game" placeholder="Enter Player Name" ref={ ref => {this.joinGame = ref; }} />
                        </Col>
                        <Button variant="dark" type="submit" onClick={(e) => this.onJoinGameClick(e)}>
                            Join 
                        </Button>
                </Form.Row>
                </Form></div>)
        }

    }
}