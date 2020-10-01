import React from 'react';
import { BsFillVolumeUpFill } from "react-icons/bs";
import WordStyles from '../styles/WordStyles';

const Word = ({word}) => {
    const playWordSound = () => {
        let utterance = new SpeechSynthesisUtterance(word);
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
            {word}

            {SpeechSynthesisUtterance ? (
                <button type="button" onClick={playWordSound}>
                    <BsFillVolumeUpFill />    
                </button>
            ) : null}
        </WordStyles>
    )
}

export default Word;