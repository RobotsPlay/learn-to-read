import React,  {useState} from 'react';
import ExerciseStyles from '../styles/ExerciseStyles';
import Frame from './Frame';
import {AiTwotoneQuestionCircle, AiFillCheckCircle, AiFillCloseCircle} from 'react-icons/ai'
import KeyboardEventHandler from 'react-keyboard-event-handler';
import MobileKeyboard from './MobileKeyboard';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import InfoScreenStyles from '../styles/InfoScreenStyles';

const Exercise = ({exerciseData}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [responses, setResponses] = useState(new Array(exerciseData.frames.length));
    const [begin, setBegin] = useState(true);
    const [end, setEnd] = useState(false);
    const [score, setScore] = useState(0);
    const [isDraggable, setIsDraggable] = useState(true);

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

    const onBegin = (e) => {
        if(e && e.target) {
            e.target.blur();
        }

        setIsDraggable(false);
        start();
    }

    const onBeginDrag = (e) => {
        if(e && e.target) {
            e.target.blur();
        }

        setIsDraggable(true);
        start();
    }

    const start = () => {
        

        setResponses(new Array(exerciseData.frames.length));
        setCurrentSlide(0);
        setScore(0);

        setBegin(false);
        setEnd(false);
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

    const getScore = () => {
        let newScore = 0;

        responses.forEach((response, i) => {
            if(response.validClass === 'correct') {
                newScore++;
            }
        });

        setScore(newScore);
    }

    const onSubmit = (e) => {
        if(e && e.target) {
            e.target.blur();
        }

        getScore();

        setBegin(false);
        setEnd(true);
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
                        setLetter={onKeyPress}
                        isDraggable={isDraggable}
                    />
                ))} 
            </div>

            {!isDraggable ? (
                <>
                    <div className="instruction">
                        Type the missing letter.
                    </div>

                    <MobileKeyboard onPress={onKeyPress} />
                </>
            ) : null}
            
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

                {isComplete() ? (
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

            <InfoScreenStyles className={begin ? 'show' : ''}>
                <h1>Learning To Read</h1>

                <p>    
                    <img src={require(`../assets/images/dog.svg`)} alt={`Illustration of a dog`}/>
                </p>

                <p>Enter the missing letter to complete the&nbsp;words.</p>

                <p>
                    <button className="button button-finish" type="button" onClick={onBegin}>Start</button> {' '}
                    <button className="button button-finish" type="button" onClick={onBeginDrag}>Start w/ Drag and Drop</button>
                </p>

                <p>
                    <small>
                        <a href="https://github.com/RobotsPlay/learn-to-read" 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Take a look at the code.
                        </a>
                    </small>
                </p>
            </InfoScreenStyles>

            <InfoScreenStyles className={end ? 'show' : ''}>
                <h1>You did it!</h1>

                <p>    
                    <img src={require(`../assets/images/sun.svg`)} alt={`Illustration of a sun`}/>
                </p>

                <p>You got {score} of {exerciseData.frames.length} correct.</p>

                <p>
                    <button className="button button-finish" type="button" onClick={onBegin}>Start Over?</button>
                </p>

                <p>
                    <button className="button button-finish" type="button" onClick={onBeginDrag}>Start Over w/ Drag and Drop?</button>
                </p>    
            </InfoScreenStyles>
        </ExerciseStyles>
    )
}

export default Exercise;