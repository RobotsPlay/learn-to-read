import React from 'react';
import { BsFillVolumeUpFill } from "react-icons/bs";
import WordStyles from '../styles/WordStyles';

const Word = ({
    word, 
    checkLetter, 
    responseLetter, 
    validClass = 'incomplete'}) => {
    
    const playWordSound = () => {
        let utterance = new SpeechSynthesisUtterance(word);
        utterance.rate = .5;
        let synth = window.speechSynthesis;

        if(synth.speaking) {
            return;
        } 

        window.setTimeout(() => {
            utterance.voice = synth.getVoices()[1];
            synth.speak(utterance);
        },  50);   
    }

    return (
        <WordStyles>            
            <div className="word">
                {word.split('').map((letter, i) => {
                    return (
                        letter.toUpperCase() === checkLetter.toUpperCase() ? (
                            <span className={`letter-input ${validClass}`} key={i}>{responseLetter}</span>
                        ) : (
                            <span className="letter" key={i}>{letter}</span>
                        )
                    )
                })}
            </div>

            {SpeechSynthesisUtterance ? (
                <button type="button" onClick={playWordSound}>
                    <BsFillVolumeUpFill />    
                </button>
            ) : null}
        </WordStyles>
    )
}

export default Word;