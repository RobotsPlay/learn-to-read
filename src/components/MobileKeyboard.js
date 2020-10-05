import React from 'react';
import MobileKeyboardStyles from '../styles/MobileKeyboardStyles';

const MobileKeyboard = ({onPress = (letter) => {}}) => {
    const keys = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    const handleClick = (e, letter) => {
        e.target.blur();
        onPress(letter);
        console.log(letter);
    }    

    return (
        <MobileKeyboardStyles>
            {keys.map((letter, i) => (
                <button className="letter-key" type="button" key={i} onClick={(e) => handleClick(e, letter)}>{letter}</button>
            ))}

            <button className="letter-key" type="button" onClick={(e) => handleClick(e, 'del')}>_</button>
        </MobileKeyboardStyles>
    )
}

export default MobileKeyboard;