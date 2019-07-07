import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default class ScoreControls extends React.Component 
{
    
    constructor(props){
        super(props);
        this.state = {
            loading: false,
        };
    }

    componentDidMount(){
    }

    onPlayerScoreClick = (e) => {
        e.preventDefault();
        this.props.onPlayerScoreClick(e.target.getAttribute('value'));
    }

    onClearScoreClick = (e) => {
        this.props.onClearScoreClick();
    }

    onShowScoreClick = (e) => {
        this.props.onShowScoreClick();
    }

    render (){
        if (this.state.loading){
            return <div>Loading...</div>
        } else {
            let values = [1,2,3,5,8,13,20];
            return <Container>
                <Row>
                    <ButtonGroup>
                    {values.map((v) => {
                        return <Button variant="outline-secondary" className='score-controls__score' onClick={(e) => {this.onPlayerScoreClick(e)}} key={v} value={v}>{v}</Button>
                    })}
                    </ButtonGroup>
                </Row>
                <Row>
                    <ButtonGroup>
                        <Button variant='dark' className='score-controls__button' onClick={(e) => {this.onClearScoreClick(e)}} key='clear_score'>Clear Score</Button>
                        <Button variant='dark' className='score-controls__button' onClick={(e) => {this.onShowScoreClick(e)}} key='show_score'>Show Score</Button>
                    </ButtonGroup>
                </Row>
            </Container>
        }

    }
}