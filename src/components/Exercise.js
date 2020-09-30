import React from 'react';
import ExerciseStyles from '../styles/ExerciseStyles';
import Frame from './Frame';

const Exercise = ({exerciseData}) => {
    return (
        <ExerciseStyles>
            Exercise has{exerciseData.frames.length} frames.

            {exerciseData.frames.map((frame) => (
                <Frame frame={frame} />
            ))} 
        </ExerciseStyles>
    )
}

export default Exercise;