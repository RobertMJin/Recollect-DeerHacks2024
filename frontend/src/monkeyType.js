import React, { useState } from 'react';

function MonkeyType() {
    const [char, setChar] = useState('');
    const [input, setInput] = useState('');
    // const [time, setTime] = useState(0);
    let charArray = text.split();

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
            <input type="text" onChange={handleChange} onKeyDown={handleKeyPress} />
            <p>Score: {score}</p>
        </div>
    );
}

export default MonkeyType;
