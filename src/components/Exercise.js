import React,  {useState} from 'react';
import ExerciseStyles from '../styles/ExerciseStyles';
import Frame from './Frame';
import {AiTwotoneQuestionCircle, AiFillCheckCircle, AiFillCloseCircle} from 'react-icons/ai'
import KeyboardEventHandler from 'react-keyboard-event-handler';
import MobileKeyboard from './MobileKeyboard';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

const Exercise = ({exerciseData}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [responses, setResponses] = useState(new Array(exerciseData.frames.length));

    const jumpToSlide = (index) => {
        if(index >= 0 && index < exerciseData.frames.length) {
            setCurrentSlide(index);
        }
    }

    const previousSlide = (e) => {
        if(currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }

        e.target.blur();
    }
    
    const nextSlide = (e) => {
        if(currentSlide < (exerciseData.frames.length - 1)) {
            setCurrentSlide(currentSlide + 1);
        }
        e.target.blur();
    }

    const isComplete = () => {
        let complete = true;

        exerciseData.frames.forEach((frame, i) => {
            if(!responses[i]?.responseLetter) {
                complete = false;
            }
        });

        return complete;
    }

    const onSubmit = () => {
        console.log('Submitted');
    }

    const onKeyPress = (key) => {
        let response = responses[currentSlide] || {};
        let responsesClone = responses.slice();

        response.responseLetter = key;

        if(key === 'backspace' || key === 'del') {
            response.responseLetter = '';
            response.validClass = 'incomplete';
        }
        else if(key.toUpperCase() === exerciseData.frames[currentSlide].checkLetter.toUpperCase()) {
            response.validClass = 'correct';
        }
        else {
            response.validClass = 'incorrect';
        }

        responsesClone[currentSlide] = response;
        setResponses(responsesClone);
    }

    return (
        <ExerciseStyles  style={{backgroundColor: exerciseData.frames[currentSlide].background}}>
            <KeyboardEventHandler
                handleKeys={['alphabetic', 'del', 'backspace']}
                onKeyEvent={onKeyPress} 
            />

            <div className="frames">            
                {exerciseData.frames.map((frame, i) => (
                    <Frame 
                        className={currentSlide === i ? 'active' : ''} 
                        key={i} 
                        frame={frame}
                        response={responses[currentSlide]}
                    />
                ))} 
            </div>

            <div className="instruction">
                Type the missing letter.
            </div>

            <MobileKeyboard onPress={onKeyPress} />

            <div className="scores">
                {exerciseData.frames.map((frame, i) => (
                    <div className={`scores-dot ${responses[i]?.validClass || ''} ${currentSlide === i ? 'active' : ''}`} key={i} onClick={() => jumpToSlide(i)}>
                        {!responses[i]?.validClass || responses[i]?.validClass === 'incomplete' ? (<AiTwotoneQuestionCircle />) : null}

                        {responses[i]?.validClass === 'correct' ? (<AiFillCheckCircle />) : null}

                        {responses[i]?.validClass === 'incorrect' ? (<AiFillCloseCircle />) : null}
                    </div>
                ))} 
            </div>

            <div className="controls">
                <button className="button" 
                    type="button" 
                    onClick={previousSlide} 
                    disabled={currentSlide <= 0}
                >
                    <BiLeftArrowAlt />
                    {' '} Back
                </button>

                {1 || isComplete() ? (
                <button className="button button-finish" type="button" onClick={onSubmit}>Finish!</button>
                ) : (null)}
                
                <button className="button" 
                    type="button" 
                    onClick={nextSlide}  
                    disabled={currentSlide >= (exerciseData.frames.length - 1)}
                >
                    Next {' '}
                    <BiRightArrowAlt />
                </button>
            </div>
        </ExerciseStyles>
    )
}

export default Exercise;