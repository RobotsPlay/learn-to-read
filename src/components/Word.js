import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { BsFillVolumeUpFill } from "react-icons/bs";
import WordStyles from '../styles/WordStyles';

const Word = ({
    word, 
    checkLetter, 
    responseLetter,
    validClass = 'incomplete'}) => {
    
    const playWordSound = (e) => {
        let utterance = new SpeechSynthesisUtterance(word);
        utterance.rate = .5;
        let synth = window.speechSynthesis;

        e.target.blur();

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
            <Droppable droppableId={`drop-letter-${word}`} direction="horizontal">
                {(provided) => (     
                     <div className="word"
                        {...provided.droppableProps} 
                        ref={provided.innerRef}
                    >
                        {word.split('').map((letter, i) => {
                            return (
                                letter.toUpperCase() === checkLetter.toUpperCase() ? (
                                    <span className={`letter-input ${validClass}`} key={i}>
                                        <span>{responseLetter}</span>
                                    </span>
                                ) : (
                                    <span className="letter" key={i}>{letter}</span>
                                )
                            )
                        })}

                        {provided.placeholder}

                        {SpeechSynthesisUtterance ? (
                            <button className="speech-button" type="button" onClick={playWordSound}>
                                <BsFillVolumeUpFill />    
                            </button>
                        ) : null}
                    </div>
                )}
            </Droppable>
        </WordStyles>
    )
}

export default Word;