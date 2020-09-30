import React,  {useState} from 'react';
import ExerciseStyles from '../styles/ExerciseStyles';
import Frame from './Frame';

const Exercise = ({exerciseData}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

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

    return (
        <ExerciseStyles>
            <div className="frames">            
                {exerciseData.frames.map((frame, i) => (
                    <Frame className={currentSlide === i ? 'active' : ''} key={i} frame={frame} />
                ))} 
            </div>

            <div className="controls">
                <button type="button" onClick={previousSlide} disabled={currentSlide <= 0}>Previous</button>
                <span>{`${currentSlide + 1} of ${exerciseData.frames.length}`}</span>
                <button type="button" onClick={nextSlide}  disabled={currentSlide >= (exerciseData.frames.length - 1)}>Next</button>
            </div>
        </ExerciseStyles>
    )
}

export default Exercise;