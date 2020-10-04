import React from 'react';
import FrameStyles from '../styles/FrameStyles';
import Word from './Word';

const Frame = ({frame, index, className = '', updateScore = () => {}}) => {
    return (
        <FrameStyles className={className} style={{backgroundColor: frame.background}}>
            <div className="frame-image">
                <img src={require(`../assets/images/${frame.word}.svg`)} alt={`Illustration of a ${frame.word}`}/>
            </div>

            <Word word={frame.word} scoreIndex={index} checkLetter={frame.checkLetter} updateScore={updateScore} />
        </FrameStyles>
    )
}

export default Frame;