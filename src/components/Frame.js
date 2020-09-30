import React from 'react';
import FrameStyles from '../styles/FrameStyles';

const Frame = ({frame, index, className = ''}) => {
    return (
        <FrameStyles className={className} style={{backgroundColor: frame.background}}>
             {frame.word}
        </FrameStyles>
    )
}

export default Frame;