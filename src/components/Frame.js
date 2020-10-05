import React from 'react';
import FrameStyles from '../styles/FrameStyles';
import Word from './Word';

const Frame = ({frame, response = {}, className = '', updateScore = () => {}}) => {
    

    return (
        <FrameStyles className={className}>
            <div className="frame-image">
                <img src={require(`../assets/images/${frame.word}.svg`)} alt={`Illustration of a ${frame.word}`}/>
            </div>

            <Word 
                word={frame.word} 
                responseLetter={response.responseLetter}
                validClass={response.validClass}
                checkLetter={frame.checkLetter} 
             />
        </FrameStyles>
    )
}

export default Frame;