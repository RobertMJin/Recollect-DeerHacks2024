import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function MonkeyType() {
    const [char, setChar] = useState('');
    const [input, setInput] = useState('');
    // const [time, setTime] = useState(0);
    let charArray = text.split();
    let location = useLocation();

    let text = location.state.data.output;
    let video = location.state.videodata;

    const handleChar = async() => {
        if (char == '') {
            if (charArray[0] || charArray[0] == ' ') {
                setChar(charArray[0]);
                charArray.shift();
            } else {
                // end of text
                return false;
            }
        } else {
            return true
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === char) {
            char = '';
            setInput(char);
        }
    };

    return (
        <div>
            <h1>Active Recall Context from Class</h1>
            <p>Try:</p>
            <p>{text}</p>
            <input type="text" onChange={handleChar} onKeyDown={handleKeyPress} />
        </div>
    );
}

export default MonkeyType;
