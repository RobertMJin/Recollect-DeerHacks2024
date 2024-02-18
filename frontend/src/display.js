import React from 'react';
import axios from 'axios';
import test from './sampledata.json';

class Display extends React.Component {
   /* state = {
        data: sampledata.JSON,
    };
    componentDidMount() {
        axios.get('http://localhost:5000/api')
            .then(response => 
                this.setState({ data: JSON.parse(response.data)}));
    }*/
    render() {
        return (
            <div>
                {test.map(a => {
                    return (
                        <div>
                            <h1>{a.name}</h1>
                            <p>{a.email}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Display;
