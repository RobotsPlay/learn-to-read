import React from 'react';
import FrameStyles from '../styles/FrameStyles';
import Word from './Word';

const Frame = ({frame, index, className = ''}) => {
    return (
        <FrameStyles className={className} style={{backgroundColor: frame.background}}>
            <Word word={frame.word} checkLetter={frame.checkLetter} />
        </FrameStyles>
    )
}

export default Frame;