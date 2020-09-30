import React from 'react';
import FrameStyles from '../styles/FrameStyles';

const Frame = ({frame}) => {
    return (
        <FrameStyles>
             {frame.word}
        </FrameStyles>
    )
}

export default Frame;