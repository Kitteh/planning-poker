import React from 'react';
import Table from 'react-bootstrap/Table';

export default class ScoreSummary extends React.Component 
{
    constructor(props){
        super(props)
        this.state = {
            players : this.props.players
        }
    }

    getAverage(players){
        let total = 0;
        let len = 0;
        players.forEach(p => {
            if (p.score !== 0) {
                total += p.score;
                len += 1;
            }
        });
        return total === 0 ? 0 : total / len;
    }

    render(){
        return <Table>
            <tr><td>Average</td><td>{this.getAverage(this.state.players)}</td></tr>
        </Table>
    }

}