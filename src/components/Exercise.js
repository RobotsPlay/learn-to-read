import React,  {useState} from 'react';
import ExerciseStyles from '../styles/ExerciseStyles';
import Frame from './Frame';
import {AiTwotoneQuestionCircle, AiFillCheckCircle, AiFillCloseCircle} from 'react-icons/ai'

const Exercise = ({exerciseData}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [scores, setScores] = useState({});

    const updateScore = (index, status) => {
        let score = {};
        score[index] = status;

        setScores(Object.assign({}, scores, score));
    }

    const jumpToSlide = (index) => {
        if(index >= 0 && index < exerciseData.frames.length) {
            setCurrentSlide(index);
        }
    }

    const previousSlide = () => {
        if(currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    }
    
    const nextSlide = () => {
        if(currentSlide < (exerciseData.frames.length - 1)) {
            setCurrentSlide(currentSlide + 1);
        }
    }

    const isComplete = () => {
        let complete = true;

        exerciseData.frames.forEach((frame, i) => {
            if(!scores[i]) {
                complete = false;
            }
        });

        return complete;
    }

    const onSubmit = () => {
        console.log('Submitted');
    }

    return (
        <ExerciseStyles>
            <div className="frames">            
                {exerciseData.frames.map((frame, i) => (
                    <Frame className={currentSlide === i ? 'active' : ''} index={i} key={i} frame={frame} updateScore={updateScore} />
                ))} 
            </div>

            <div className="scores">
                {exerciseData.frames.map((frame, i) => (
                    <div className={`scores-dot ${scores[i] || ''} ${currentSlide === i ? 'active' : ''}`} key={i} onClick={() => jumpToSlide(i)}>
                        {!scores[i] ? (<AiTwotoneQuestionCircle />) : null}

                        {scores[i] && scores[i] === 'correct' ? (<AiFillCheckCircle />) : null}

                        {scores[i] && scores[i] === 'incorrect' ? (<AiFillCloseCircle />) : null}
                    </div>
                ))} 
            </div>

            <div className="controls">
                <button type="button" onClick={previousSlide} disabled={currentSlide <= 0}>Previous</button>
                <span>{`${currentSlide + 1} of ${exerciseData.frames.length}`}</span>
                {isComplete() ? (
                <button type="button" onClick={onSubmit}>Submit</button>
                ) : (
                    <button type="button" onClick={nextSlide}  disabled={currentSlide >= (exerciseData.frames.length - 1)}>Next</button>
                )}
            </div>
        </ExerciseStyles>
    )
}

export default Exercise;