import React, {useState} from 'react';
import { BsFillVolumeUpFill } from "react-icons/bs";
import WordStyles from '../styles/WordStyles';

const Word = ({word, checkLetter, scoreIndex = 0,  updateScore = () => {}}) => {
    const [responses, setResponses] = useState({});
    const [letterValidation, setLetteValidation] = useState({});

    const onSetAnswer = (value, index) => {
        let answer = {};
        answer[index] = value.toUpperCase();
        setResponses(Object.assign({}, responses, answer));
        
        let validation = {};
        validation[index] = updateLetterValidation(index, value.toUpperCase());
        setLetteValidation(Object.assign({}, letterValidation, validation));
    }

    const updateLetterValidation = (index, response) => {
        if(response) {
            if(response === checkLetter.toUpperCase()) {
                updateScore(scoreIndex, 'correct');
                return 'correct';
            }
            updateScore(scoreIndex, 'incorrect');
            return 'incorrect';
        }

        updateScore(scoreIndex, false);
        return 'incomplete';
    }

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
                            <input type="text" 
                                maxLength="1" 
                                className={`letter-input ${letterValidation[i] || 'incomplete'}`} 
                                key={i} 
                                onChange={(e) => {onSetAnswer(e.target.value, i)}} />
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